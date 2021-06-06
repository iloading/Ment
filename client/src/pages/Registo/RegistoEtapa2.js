import registoImg from "../../img/registo/registoImg.png";
import setaAtras from "../../img/setaAtras.png";
/* import icon_nome from "../../img/icon_nome.png"; */
import icon_dropdown from "../../img/icons/icon_dropdown.png";
import { Field, ErrorMessage } from 'formik';


import { Formik, Form } from "formik";
import * as Yup from 'yup';

import { useEffect } from "react"



function RegistoEtapa2({ setEtapa, dados, setDados, validadeFormulario2, setvalidadeFormulario2 }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    let initialValues

    /* Desta forma se o utilizador voltar a tras durante o registo, os dados ficam guardados nos campos corretos */

    (dados.name || dados.role) ?
        initialValues = {
            name: dados.name,
            role: dados.role,

        } : initialValues = {
            name: "",
            role: "",
        }


    const camposValidador = Yup.object().shape({
        name: Yup.string().required("Este campo é obrigatório").min(3, 'Por favor insira o seu primeiro e último nomes, o número mínimo de carateres é 3').max(250, 'O número máximo de carateres é 250'),
        role: Yup.number().required("Este campo é obrigatório").positive('Selecione um cargo').integer('Selecione um cargo').min(0, 'Selecione um cargo').max(1, 'Selecione um cargo'),

    })


    const validar = () => {

        camposValidador.validate({
            name: document.getElementById('inputName').value,
            role: document.getElementById('inputRole').value,

        }).then(function () {

            setvalidadeFormulario2(true)

        }).catch((e) => {
            setvalidadeFormulario2(false);

        });
    }

    //Quando todos os campos são devidamente preenchidos e válidos, o botão de próxima etapa fica disponível







    const onSubmit = (data) => {
        console.log(data);
        setDados({ ...dados, name: data.name, role: data.role })
        setEtapa(3)
    }

    const redirectBack = () => { setEtapa(1) }



    return (
        <Formik initialValues={initialValues} validationSchema={camposValidador} onSubmit={onSubmit}>
            <Form className="formularioRegisto" >
                <header className="registoImg">
                    <div className="setaTras" onClick={redirectBack}>
                        <img src={setaAtras} alt="seta atras" />
                    </div>
                    <img src={registoImg} alt=" registo imagem" />
                </header>

                <div className="formulario" id='etapa2'>
                    <section className="tituloPrincipal">
                        <label>Os seus dados</label>
                    </section>
                    <section className="paragrafo">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos at nostrum nemo earum obcaecati voluptas consectetur.</p>
                    </section>
                    <section className="inputFormulario">

                        <label>Nome</label>
                        {/* Falta meter estilos nestes erros */}

                        <div>
                            {/* <img src={icon_nome} alt="" /> */}
                            <Field placeholder="ex: Joana Silva" name="name" id="inputName" type="text" onInput={validar}></Field>
                        </div>
                        <div className="error">
                            <ErrorMessage name="name" component="p" />
                        </div>

                    </section>
                    <section className="inputFormulario selectFormulario">
                        <label>Cargo</label>
                        <div>
                            <img src={icon_dropdown} alt="icone dropdown" />
                            <Field as="select" name="role" required id='inputRole' onInput={validar}>
                                <option value="" disabled hidden selected>Selecionar Cargo</option>
                                <option value={0}>Aluno Mentor</option>
                                <option value={1}>Professor</option>
                            </Field>
                        </div>
                        <div className="error">
                            <ErrorMessage name="role" component="p" />
                        </div>
                    </section>
                    <section className="botao">
                        {validadeFormulario2 ? <button type="submit" id='nextStep2' >Próxima Etapa</button> : <button type="submit" id='nextStep2' disabled>Próxima Etapa</button>}


                    </section>

                </div>

            </Form>
        </Formik>


    );

}

export default RegistoEtapa2;
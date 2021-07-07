import registoImg from "../../img/registo/registoImg.png";
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import navLogo from "../../img/logo.svg";
import registoImgDesktop from "../../img/registo/registo2Img_desktop.svg";
/* import icon_nome from "../../img/icon_nome.png"; */
/* import icon_dropdown from "../../img/icons/icon_dropdown.png"; */
import { Field, ErrorMessage } from 'formik';
import { colourStyles } from './selectStyle';
//Fromulario
import Select from 'react-select'
import { Formik, Form } from "formik";
import * as Yup from 'yup';

import { useEffect, useCallback } from "react"

import { useHistory } from "react-router-dom"



function RegistoEtapa2({ dados, setDados, validadeFormulario2, setvalidadeFormulario2 }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])



    const options = [

        { value: 0, label: 'Aluno Mentor' },
        { value: 1, label: 'Professor' }
    ]


    let initialValues

    /* Desta forma se o utilizador voltar a tras durante o registo, os dados ficam guardados nos campos corretos */

    (dados.name) ?
        initialValues = {
            name: dados.name,
        } : initialValues = {
            name: "",
        }


    const camposValidador = Yup.object().shape({
        name: Yup.string().required("Este campo é obrigatório").min(4, 'Por favor insira o seu primeiro e último nomes, o número mínimo de carateres é 4').max(250, 'O número máximo de carateres é 250'),
        /*  role: Yup.number().required("Este campo é obrigatório").positive('Selecione um cargo').integer('Selecione um cargo').min(0, 'Selecione um cargo').max(1, 'Selecione um cargo'), */

    })


    const validar = useCallback(
        () => {
            camposValidador.validate({
                name: document.getElementById('inputName').value,
                /* role: document.getElementById('inputRole').value, */

            }).then(function () {
                if (dados.role === 1 || dados.role === 0) {
                    setvalidadeFormulario2(true)
                }


            }).catch((e) => {
                setvalidadeFormulario2(false);

            });
        },
        [setvalidadeFormulario2, camposValidador, dados.role],
    )
    //Quando todos os campos são devidamente preenchidos e válidos, o botão de próxima etapa fica disponível



    const history = useHistory();
    const redirectLogin = () => { history.push("/login") }

    const handleChange = (e) => {
        setDados({ ...dados, role: e.value })

    }

    useEffect(() => {
        validar()

    }, [dados.role, validar])

    const onSubmit = (data) => {
        setDados({ ...dados, name: data.name })
        history.push('/registo/3')

    }




    const redirectBack = () => { history.push('/registo/1') }



    return (
        <>
            <div className="formularioRegisto_menu">
                <aside className="menu_principal_registo">
                    <div className="asideLogoRegisto">
                        <img src={navLogo} alt="" />
                    </div>
                </aside>
            </div>
            <div id="main">
                <section id="main" className="conteudoMain">

                    {/*DESKTOP*/}
                    <div id="bemvindo">

                        <div className="bemvindo_titulos">
                            <h3>Bom dia,</h3>
                            <h1>Registar</h1>
                        </div>
                        <div className="icons">
                            <button type="button" className="botaoLogin" onClick={redirectLogin}>Entrar</button>
                        </div>

                    </div>

                    <div className="titulo">
                        <div className="tituloPag criarEquipaTitulo" id="tituloPag">
                            <label className="tituloCriarEquipas desktop">Criar uma nova sessão</label>
                        </div>



                    </div>

                    <div className="conteudoMid">
                        <div className="conteudoEsquerda">
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
                                            <p>Nesta etapa por favor introduza o seu primeiro e último nome, e o seu cargo (professor ou aluno). Este último passo é permanente e influencia as funcionalidades disponíveis para si na aplicação. Por favor preencha cautelosamente.</p>
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
                                        <section className="">
                                            <label>Cargo</label>

                                            {/* <img src={icon_dropdown} alt="icone dropdown" /> */}

                                            <Select options={options} required id='inputRole' className='react-select-form' isSearchable={false} styles={colourStyles} placeholder={'Selecionar Cargo'} onChange={handleChange} value={options.find(obj => obj.value === dados.role)}> </Select>


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
                        </div>
                        <div className="conteudoDireitaDesktop">
                            <div className="botaoEtapaAnterior">
                                <img src={setaAtras} className="iconSeta" alt="seta para retroceder" />
                                <p className="textoBotao">Etapa anterior</p>
                            </div>
                            <img src={registoImgDesktop} className="imgEquipa" alt="criar equipa primeira imagem" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );

}

export default RegistoEtapa2;
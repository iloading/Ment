import registo2Img from "../../img/registo/registo2Img.png";
import icon_nome from "../../img/icons/icon_nome.png";
import { Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

import { Formik, Form } from "formik";
import * as Yup from 'yup';



function RegistoEtapa1({ setEtapa, dados, setDados }) {
    let initialValues

    /* Desta forma se o utilizador voltar a tras durante o registo, os dados ficam guardados nos campos corretos */

    (dados.email || dados.password || dados.password_confirm) ?
        initialValues = {

            email: dados.email,
            password: dados.password,
            password_confirm: dados.password_confirm,

        } : initialValues = {

            email: "",
            password: "",
            password_confirm: "",

        }

    const camposValidador = Yup.object().shape({

        email: Yup.string().email("O conteúdo que introduziu não é um email").required("Este campo é obrigatório"),
        password: Yup.string().required("Este campo é obrigatório").max(20, 'A password não pode exceder 20 caracteres'),
        password_confirm: Yup.string().oneOf([Yup.ref('password'), null], 'As passwords não são iguais'),

    })
    const onSubmit = (data) => {
        setDados({
            ...dados,
            email: data.email,
            password: data.password,
            password_confirm: data.password_confirm,
        })
        setEtapa(2)
    }

    /* const history = useHistory();

    const redireciona = () => {
        let path = "/registo/3";
        history.push(path);
    } */


    return (
        <Formik initialValues={initialValues} validationSchema={camposValidador} onSubmit={onSubmit}>
            <Form className="formularioRegisto">
                <header className="registoImg">
                    <img src={registo2Img} alt="" />
                </header>
                <div className="formulario f1">
                    <section className="tituloPrincipal">
                        <label>Os Seus Dados</label>
                    </section>
                    <section className="paragrafo">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos at nostrum nemo earum obcaecati voluptas consectetur, qui recusandae ut delectus harum nobis aliquid, odit ex deserunt laudantium, assumenda voluptatibus?</p>
                    </section>
                    <section className="inputFormulario">

                        <label>Email</label>
                        {/* Falta meter estilos nestes erros */}

                        <div>
                            <img src={icon_nome} alt="" />
                            <Field placeholder="ex: joana.silva12@gmail.com" name="email" id="inputEmail" type="email" />
                        </div>
                        <ErrorMessage name="email" component="p" />
                    </section>
                    <section className="inputFormulario">

                        <label>Password</label>
                        {/* Falta meter estilos nestes erros */}

                        <div>
                            {/* <img src={icon_nome} alt="" /> */}
                            <Field placeholder="*********" name="password" id="inputPassword" type="password" />
                        </div>
                        <ErrorMessage name="password" component="p" />
                    </section>
                    <section className="inputFormulario">

                        <label>Confirmar Password</label>
                        {/* Falta meter estilos nestes erros */}

                        <div>
                            {/* <img src={icon_nome} alt="" /> */}
                            <Field placeholder="*********" name="password_confirm" id="inputPassword_confirm" type="password" />
                        </div>
                        <ErrorMessage name="password_confirm" component="p" />
                    </section>

                    <section className="botao">

                        <button type="submit" >Próxima Etapa</button>

                    </section>

                    <section className="tituloFooter">
                        <Link to="/">Já tem conta? Faça o login aqui</Link>
                    </section>

                </div>

            </Form>
        </Formik>


    );

}

export default RegistoEtapa1;
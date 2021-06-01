import registo2Img from "../../img/registo/registo2Img.png";
import icon_email_loading from "../../img/icon_email_loading.gif";
import icon_email_success from "../../img/icon_email_success.png";
import icon_email_error from "../../img/icon_email_error.png";
import setaAtras from "../../img/setaAtras.png";


import { Link, useHistory } from 'react-router-dom';
import { useEffect, useCallback } from 'react'
//Verificação de Inputs
import { Formik, Form } from "formik";
import { Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


//API REQUESTS
import { verifyEmailExists } from '../../API';

function RegistoEtapa1({ validadeEmail, setValidadeEmail, validadeFormulario1, setvalidadeFormulario1, setEtapa, etapa, dados, setDados }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    /* initialValues - Desta forma se o utilizador voltar a tras durante o registo, os dados ficam guardados nos campos corretos */
    let initialValues
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

    //Validador de todos os campos. Quando todos estiverem bem preenchidos, o botao de proxima etapa fica disponivel
    const camposValidador = Yup.object().shape({

        email: Yup.string().email("O conteúdo que introduziu não é um email").required("Este campo é obrigatório"),
        password: Yup.string().required("Este campo é obrigatório").max(20, 'A password não pode exceder 20 caracteres'),
        password_confirm: Yup.string().oneOf([Yup.ref('password'), null], 'As passwords não são iguais'),

    })

    //Este validador apenas serve para apurar quando um email é inserido na sua integra para que seja possível verificar na base de dados se este já existe ou não
    const emailValidator = Yup.object().shape({
        email: Yup.string().email("O conteúdo que introduziu não é um email").required("Este campo é obrigatório"),
    })


    const validar = useCallback(
        (validadeEmail) => {

            //Quando todos os campos são devidamente preenchidos e válidos, o botão de próxima etapa fica disponível


            camposValidador.validate({
                email: document.getElementById('inputEmail').value,
                password: document.getElementById('inputPassword').value,
                password_confirm: document.getElementById('inputPassword_confirm').value
            }).then(function () {

                if (validadeEmail === 2) {

                    setvalidadeFormulario1(true)

                } else if (validadeEmail === 1) {
                    setvalidadeFormulario1(false)
                    /* console.log('not done yet - email já em uso'); */
                }


            }).catch((e) => {
                setvalidadeFormulario1(false);

            });

        },
        [camposValidador, setvalidadeFormulario1],
    )

    useEffect(() => {

        validar(validadeEmail)

    }, [validadeEmail, validar])

    const validarEmail = () => {

        emailValidator.validate({
            email: document.getElementById('inputEmail').value,
        }).then(async () => {
            setValidadeEmail(0)
            const response = await verifyEmailExists({ email: document.getElementById('inputEmail').value, })

            let { success,/*  error */ } = response.data

            if (success) {
                setValidadeEmail(2)

            } else {
                //Mostrar o erro somewhere
                setValidadeEmail(1)

            }

        }).catch((e) => { setValidadeEmail(1); });

    }

    //Ao clicar no botao de proxima etapa
    const onSubmit = async (data) => {

        if (validadeEmail === 2 && validadeFormulario1 === true) {
            setDados({
                ...dados,
                email: data.email,
                password: data.password,
                password_confirm: data.password_confirm,
            })
            //Passar à próxima etapa
            setEtapa(2)
        } else {
            //Dar feedback que o email já está em uso
        }







    }

    let history = useHistory();
    const redirectBack = () => { history.goBack() }







    /* const history = useHistory();
    
    const redireciona = () => {
        let path = "/registo/3";
        history.push(path);
    } */


    return (
        <Formik initialValues={initialValues} validationSchema={camposValidador} onSubmit={onSubmit}>
            <Form className="formularioRegisto">
                <header className="registoImg">


                    <div className="setaTras" onClick={redirectBack}>
                        <img src={setaAtras} alt="seta atras" />
                    </div>

                    <img src={registo2Img} alt="registo segunda imagem" />

                </header>
                <div className="formulario" id='etapa1'>
                    <section className="tituloPrincipal">
                        <label>Registo</label>
                    </section>
                    {/* <section className="paragrafo">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos at nostrum nemo earum obcaecati voluptas consectetur.</p>
                    </section> */}
                    <section className="inputFormulario">

                        <label>Email</label>
                        {/* Falta meter estilos nestes erros */}

                        <div>
                            {validadeEmail === null && <></>}
                            {validadeEmail === 0 && <img src={icon_email_loading} alt="gif loading" />}
                            {validadeEmail === 1 && <><img src={icon_email_error} alt="Error Icon" /></>}
                            {validadeEmail === 2 && <img src={icon_email_success} alt="Success Icon" />}

                            <Field placeholder="ex: joana.silva12@gmail.com" name="email" id="inputEmail" type="email" onInput={() => {
                                validarEmail();
                            }} />
                        </div>
                        <div className="error">
                            <ErrorMessage name="email" component="p" />
                        </div>

                    </section>
                    <section className="inputFormulario">

                        <label>Password</label>
                        {/* Falta meter estilos nestes erros */}

                        <div>
                            {/* <img src={icon_nome} alt="" /> */}
                            <Field placeholder="*********" name="password" id="inputPassword" type="password" onInput={() => validar(validadeEmail)} />
                        </div>
                        <div className="error">
                            <ErrorMessage name="password" component="p" />
                        </div>
                    </section>
                    <section className="inputFormulario">

                        <label>Confirmar Password</label>
                        {/* Falta meter estilos nestes erros */}

                        <div>
                            {/* <img src={icon_nome} alt="" /> */}
                            <Field placeholder="*********" name="password_confirm" id="inputPassword_confirm" type="password" onInput={() => validar(validadeEmail)} />
                        </div>
                        <div className="error">
                            <ErrorMessage name="password_confirm" component="p" />
                        </div>
                    </section>

                    <section className="botao">
                        {validadeFormulario1 ? <button type="submit" id='nextStep1' >Próxima Etapa</button> : <button type="submit" id='nextStep1' disabled>Próxima Etapa</button>}


                    </section>

                    <section className="tituloFooter">
                        <Link to='/login'><span><u> Já está registado? Clique aqui</u></span></Link>
                    </section>

                </div>

            </Form>
        </Formik >


    );

}

export default RegistoEtapa1;
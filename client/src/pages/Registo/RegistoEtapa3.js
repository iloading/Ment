import registo3Img from "../../img/registo3Img.png";
import { Link } from 'react-router-dom';

import { Formik, Form } from "formik";
import * as Yup from 'yup';


function RegistoEtapa3({ setEtapa, dados, setDados }) {
    let initialValues

    /* Desta forma se o utilizador voltar a tras durante o registo, os dados ficam guardados nos campos corretos */

    dados.avatar ?
        initialValues = {
            avatar: dados.avatar,

        } : initialValues = {
            avatar: "",
        }

    const camposValidador = Yup.object().shape({
        /* Alterar os valores de min e max dependendo de quantos avatares temos */
        avatar: Yup.string().required("Este campo é obrigatório").min(1).max(9),
    })

    const onSubmit = (data) => {
        setDados({ ...dados, avatar: data.avatar })
        setEtapa(4)
    }



    return (
        <Formik initialValues={initialValues} validationSchema={camposValidador} onSubmit={onSubmit}>
            <Form className="formularioRegisto">
                <header className="registoImg">
                    <img src={registo3Img} alt="" />
                </header>
                <div className="formulario f1">
                    <section className="tituloPrincipal">
                        <label>Escolher avatar</label>
                    </section>
                    <section className="paragrafo">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos at nostrum nemo earum obcaecati voluptas consectetur, qui recusandae ut delectus harum nobis aliquid, odit ex deserunt laudantium, assumenda voluptatibus?</p>
                    </section>


                    <section className="botao">

                        <button>Escolher Avatar</button>

                    </section>

                    <section className="tituloFooter">
                        <Link to="/">Já tem conta? Faça o login aqui</Link>
                    </section>

                </div>

            </Form>
        </Formik >


    );

}

export default RegistoEtapa3;
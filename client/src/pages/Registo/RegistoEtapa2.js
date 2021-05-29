import registo2Img from "../../img/registo2Img.png";
import icon_nome from "../../img/icon_nome.png";
import { Field, ErrorMessage } from 'formik';
import { useHistory, Link } from 'react-router-dom';




function RegistoEtapa2() {

    const history = useHistory();

    const redireciona = () => {
        let path = "/registo/3";
        history.push(path);
    }


    return (
        <>
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
                    <ErrorMessage name="email" component="p" />
                    <div>
                        <img src={icon_nome} alt="" />
                        <Field placeholder="ex: joana.silva12@gmail.com" name="email" id="inputEmail" type="email" />
                    </div>
                </section>
                <section className="inputFormulario">

                    <label>Password</label>
                    {/* Falta meter estilos nestes erros */}
                    <ErrorMessage name="password" component="p" />
                    <div>
                        <img src={icon_nome} alt="" />
                        <Field placeholder="*********" name="password" id="inputPassword" type="password" />
                    </div>
                </section>
                <section className="inputFormulario">

                    <label>Confirmar Password</label>
                    {/* Falta meter estilos nestes erros */}
                    <ErrorMessage name="password_confirm" component="p" />
                    <div>
                        <img src={icon_nome} alt="" />
                        <Field placeholder="*********" name="password_confirm" id="inputPassword_confirm" type="password" />
                    </div>
                </section>

                <section className="botao">

                    <button onClick={redireciona}>Próxima Etapa</button>

                </section>

                <section className="tituloFooter">
                    <Link to="/">Já tem conta? Faça o login aqui</Link>
                </section>

            </div>

        </>


    );

}

export default RegistoEtapa2;
import registoImg from "../../img/registoImg.png";
import icon_nome from "../../img/icon_nome.png";
import icon_dropdown from "../../img/icon_dropdown.png";
import { Field, ErrorMessage } from 'formik';
import { useHistory, Link } from 'react-router-dom';





function RegistoEtapa1() {


    const history = useHistory();

    const redireciona = () => {
        let path = "/registo/2";
        history.push(path);
    }


    return (
        <>
            <header className="registoImg">
                <img src={registoImg} alt="" />
            </header>

            <div className="formulario">
                <section className="tituloPrincipal">
                    <label>Registar</label>
                </section>
                <section className="paragrafo">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos at nostrum nemo earum obcaecati voluptas consectetur, qui recusandae ut delectus harum nobis aliquid, odit ex deserunt laudantium, assumenda voluptatibus?</p>
                </section>
                <section className="inputFormulario">

                    <label>Nome Completo</label>
                    {/* Falta meter estilos nestes erros */}
                    <ErrorMessage name="name" component="p" />
                    <div>
                        <img src={icon_nome} alt="" />
                        <Field placeholder="ex: Joana Silva" name="name" id="inputName" type="text" />
                    </div>
                </section>
                <section className="selectFormulario">
                    <label>Cargo</label>
                    <div>
                        <img src={icon_dropdown} alt="" />
                        <Field as="select" name="cargo">
                            <option value="Professor">Professor</option>
                            <option value="Aluno">Aluno</option>
                        </Field>
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

export default RegistoEtapa1;
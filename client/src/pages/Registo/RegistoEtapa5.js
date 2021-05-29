import registo5Img from "../../img/registo5Img.png";
import icon_nome from "../../img/icon_nome.png";
import icon_dropdown from "../../img/icon_dropdown.png";
import { Field, ErrorMessage } from 'formik';



function RegistoEtapa5() {



    return (
        <>
            <header className="registoImg">
                <img src={registo5Img} alt="" />
            </header>
            <div className="formulario">
                <section className="tituloPrincipal">
                    <label>Informações</label>
                </section>
                <section className="paragrafo">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos at nostrum nemo earum obcaecati voluptas consectetur, qui recusandae ut delectus harum nobis aliquid, odit ex deserunt laudantium, assumenda voluptatibus?</p>
                </section>
                <section className="inputFormulario">

                    <label>Escola</label>
                    {/* Falta meter estilos nestes erros */}
                    <ErrorMessage name="email" component="p" />
                    <div>
                        <img src={icon_nome} alt="" />
                        <Field placeholder="ex: Escola Random Random" name="escola" id="inputEscola" type="text" />
                    </div>
                </section>
                <section className="selectFormulario">
                    <label>Cargo</label>
                    <div>
                        <img src={icon_dropdown} alt="" />
                        <Field as="select" name="disciplina">
                            <option value="mat">Mat</option>
                            <option value="ing">ING</option>
                        </Field>
                    </div>
                </section>


                <section className="botao">

                    <button>Criar</button>

                </section>
            </div>
        </>


    );

}

export default RegistoEtapa5;
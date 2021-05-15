import registoImg from "../../img/registoImg.png";
import icon_nome from "../../img/icon_nome.png";
import icon_cargo from "../../img/icon_cargo.png";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';



function RegistoEtapa1() {


    const initialValues = {
        name: "",
    }
    const camposValidador = Yup.object().shape({
        name: Yup.string().required("Name is required")
    })

   

    const history = useHistory();

    const redireciona=()=> {
        let path = "/registo/2";
        history.push(path);
      }

   
    return (
        <article className="registoEtapa1">
            <div className="registoImg">
                <img src={registoImg} alt="" />
            </div>
            <Formik initialValues={initialValues} validationSchema={camposValidador}>
                <Form>
                    <section>
                        <span>Registo</span>
                    </section>
                    <section>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos at nostrum nemo earum obcaecati voluptas consectetur, qui recusandae ut delectus harum nobis aliquid, odit ex deserunt laudantium, assumenda voluptatibus?</p>
                    </section>
                    <section>

                        <label>Nome Completo</label>
                        {/* Falta meter estilos nestes erros */}
                        <ErrorMessage name="name" component="p" />
                        <div>
                            <img src={icon_nome} alt="" />
                            <Field placeholder="ex: Joana Silva" name="name" id="inputName" type="text" />
                        </div>
                    </section>
                    <section>
                        <label>Cargo</label>
                        <div>
                            <img src={icon_cargo} alt="" />
                            <select name="cargo">
                                <option value="Professor">Professor</option>
                                <option value="Aluno">Aluno</option>
                            </select>
                        </div>
                    </section>
                    <section>
                    
                        <button onClick={redireciona}>Próxima Etapa</button>
                    
                    </section>
                </Form>
            </Formik>
        </article>


    );

}

export default RegistoEtapa1;
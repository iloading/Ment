import registo3Img from "../../img/registo3Img.png";
import { useHistory, Link } from 'react-router-dom';




function RegistoEtapa3() {

    const history = useHistory();

    const redireciona = () => {
        let path = "/registo/4";
        history.push(path);
    }


    return (
        <>
            <header className="registoImg">
                <img src={registo3Img} alt="" />
            </header>
            <div className="formulario">
                <section className="tituloPrincipal">
                    <label>Escolher avatar</label>
                </section>
                <section className="paragrafo">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos at nostrum nemo earum obcaecati voluptas consectetur, qui recusandae ut delectus harum nobis aliquid, odit ex deserunt laudantium, assumenda voluptatibus?</p>
                </section>


                <section className="botao">

                    <button onClick={redireciona}>Escolher Avatar</button>

                </section>

                <section className="tituloFooter">
                    <Link to="/">Já tem conta? Faça o login aqui</Link>
                </section>

            </div>

        </>


    );

}

export default RegistoEtapa3;
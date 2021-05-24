
import { useHistory } from 'react-router-dom';
import avatar_1 from "../../img/avatar/avatar_1.png";




function RegistoEtapa4() {

    const history = useHistory();

    const redireciona = () => {
        let path = "/registo/5";
        history.push(path);
    }


    return (
        <>
        <article className="avatar"> 
            <h1>ola</h1>
            <section className="avatarSelect">
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
                    <div>
                        <img src={avatar_1} alt="" />
                    </div>
            </section>

            <section className="botao">

                    <button onClick={redireciona}>Escolher Avatar</button>

            </section>

        </article>
            

        </>


    );

}

export default RegistoEtapa4;

import { useHistory } from 'react-router-dom';

import Avatar from "../components/Avatar";




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
                <Avatar />

                <section className="botao">

                    <button onClick={redireciona}>Escolher Avatar</button>

                </section>

            </article>


        </>


    );

}

export default RegistoEtapa4;
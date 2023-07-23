import { Button } from "react-bootstrap";
import { AiFillHtml5 } from "react-icons/ai";
const Description = () => {
    return (
        <>
            <p>Mi sono avvicinato al mondo della programmazione per la curiosità e l’opportunità di trovare un lavoro. Sono rimasto affascinato dalla grafica, dalla tecnica e dal modo in cui la programmazione mi permette di esprimere la mia creatività in 100.000 modi tutti diversi</p>
            <div> <h3>Descrizione</h3>
                <p className="fs-3 description">
                    Il mio nome è Francesco Cacciapuoti. Fin dall’infanzia, la curiosità e la sete di conoscenza sono sempre state caratteristiche importanti della mia personalità. Dopo aver conseguito un diploma in meccanica, meccatronica ed energia, ho lavorato per diversi anni nel settore come tecnico addetto alla distribuzione del gas. Successivamente, ho deciso di esplorare il campo della tecnologia e dello sviluppo web, scoprendo nuove lingue da imparare, come HTML, CSS e JavaScript. Mi sono appena laureato presso EPICODE come sviluppatore Full Stack e sto costantemente facendo del mio meglio per migliorare le mie competenze nella programmazione di siti web, desiderando costruire la mia carriera nel mondo digitale.
                </p>
            </div>
            <h3>Skills</h3>
            <div id="iconeSkills">
                <AiFillHtml5 className="fs-1" />
            </div>
        </>
    );
};

export default Description;
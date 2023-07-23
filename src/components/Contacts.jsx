import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contacts = () => {
    return (
        <>
            <div className="contatti-section">
                <h2>Contatti</h2>
            </div>
            <div className="d-flex justify-content-center mb-5 mt-5">
                <button className="btnText button flex-fill me-2">
                    <FontAwesomeIcon icon={faPhone} beatFade size='xl' style={{ color: "#21e114" }} />
                    <span>+39 3207010150</span>
                </button>
                <a href="mailto:cacciapuotifrancesco3@gmail.com" rel="noopener noreferrer" target="_blank" className="mail flex-fill ms-2">
                    <button className="btnText button">
                        <FontAwesomeIcon icon={faEnvelope} beatFade size='xl' style={{ color: "#21e114" }} />
                        <span className="text-truncate fs-5">cacciapuotifrancesco3@gmail.com</span>
                    </button>
                </a>
            </div>

        </>
    );
};

export default Contacts;



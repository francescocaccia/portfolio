import { Link } from "react-router-dom";
import logoPortfolio from "../logoPortfolio.png";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyFooter = () => {
    return (
        <footer className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3">
            <div className="d-flex align-items-center">
                <img src={logoPortfolio} alt="logoPortfolio" style={{ width: '50px', height: '50px' }} />
                <h5 className="ms-3">Francesco Cacciapuoti</h5>
            </div>
            <ul className="d-flex gap-5 list-unstyled me-5 ">
                <Link to="https://github.com/francescocaccia" target="_blank">
                    <li>
                        <FontAwesomeIcon icon={faGithub} shake className="large-icon" size='xl' style={{ color: "#000000" }} />
                    </li>
                </Link>
                <Link to="https://www.linkedin.com/in/francesco-cacciapuoti-45019718a/" target="_blank">
                    <li>
                    <FontAwesomeIcon icon={faLinkedin} shake className="large-icon" size='xl' style={{ color: "#2874A6" }} />
                    </li>
                </Link>
            </ul>
        </footer>
    );
};

export default MyFooter;

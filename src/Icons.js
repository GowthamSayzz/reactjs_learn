import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { faAirbnb, faApple, faDocker, faGithub, faGoogle, faLinkedin, faReddit, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";


function Icons() {
    return (
        <div className="container my-4">
            <div className="col-12 mb-5">
                <Header />
            </div>
            <div className="card">
                <div className="card-header text-center text-primary">
                    <h4 className="mb-0">Brand Icons</h4>
                </div>
                <div className="card-body">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <h5>Apple: <FontAwesomeIcon icon={faApple} className="text-primary-emphasis fs-1" /></h5>
                        </div>

                        <div className="col-md-4">
                            <h5>Share: <FontAwesomeIcon icon={faArrowUpFromBracket} className="text-danger fs-1" /></h5>
                        </div>

                        <div className="col-md-4">
                            <h5>Open File: <FontAwesomeIcon icon={faFilePen} className="text-warning fs-1" /></h5>
                        </div>

                        <div className="col-md-4">
                            <h5>Youtube: <FontAwesomeIcon icon={faYoutube} className="text-primary fs-1" /></h5>
                        </div>

                        <div className="col-md-4">
                            <h5>LinkedIn: <FontAwesomeIcon icon={faLinkedin} className="text-secondary fs-1" /></h5>
                        </div>

                        <div className="col-md-4">
                            <h5>Docker: <FontAwesomeIcon icon={faDocker} className="text-dark fs-1" /></h5>
                        </div>

                        <div className="col-md-4">
                            <h5>Reddit: <FontAwesomeIcon icon={faReddit} className="text-success fs-1" /></h5>
                        </div>

                        <div className="col-md-4">
                            <h5>Google: <FontAwesomeIcon icon={faGoogle} className="text-info fs-1" /></h5>
                        </div>

                        <div className="col-md-4">
                            <h5>Whatsapp: <FontAwesomeIcon icon={faWhatsapp} className="text-success-emphasis fs-1" /></h5>
                        </div>

                        <div className="col-md-4">
                            <h5>Github: <FontAwesomeIcon icon={faGithub} className="text-danger-emphasis fs-1" /></h5>
                        </div>

                        <div className="col-md-4">
                            <h5>Airbnb: <FontAwesomeIcon icon={faAirbnb} className="text-warning-emphasis fs-1" /></h5>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-12 mt-5">
                <Footer />
            </div>
        </div>
    )
}

export default Icons;
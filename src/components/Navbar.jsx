import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav style={{ fontFamily: 'Fira Code' }} className="navbar navbar-expand-lg navbar-light font">
                <div className="container-fluid d-flex  justify-content-between">
                    <Link className="navbar-brand fs-1 text-white" to="/">MD</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <AiOutlineMenu style={{ color: "#f9004d" }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav navbar-end me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5 text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 text-white" to="/about">About </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 text-white" to="/contact" tabindex="-1" aria-disabled="true">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 text-white" to="/project" tabindex="-1" aria-disabled="true">Project</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
    return (
        <div>
            <nav style={{ fontFamily: 'Fira Code' }} className="navbar navbar-expand-lg navbar-light font">
                <div className="container-fluid d-flex  justify-content-between">
                    <a className="navbar-brand fs-1 text-white" href="#">MD</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <AiOutlineMenu style={{ color: "#f9004d" }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav navbar-end me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fs-5 text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5 text-white" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5 text-white" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
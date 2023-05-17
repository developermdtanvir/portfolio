import { AiFillGithub, AiFillLinkedin, AiOutlineFacebook } from 'react-icons/ai';
function Footer() {
    return (
        <div>
            <div className="d-flex justify-content-center ">
                <div className=" text-light text-center">
                    <h1 className="">FIND ME ON</h1>
                    <p className=" fs-2">Feel free to <span style={{ color: "#f9004d" }}>connect</span> with me</p>
                    <div>
                        <span className='fs-3 mx-2 btn btn-outline-primary rounded-circle'><AiFillGithub className='' /></span>
                        <span className='fs-3 mx-2 btn btn-outline-primary rounded-circle'><AiOutlineFacebook /></span>
                        <span className='fs-3 mx-2 btn btn-outline-primary rounded-circle'><AiFillLinkedin /></span>
                    </div>
                </div>
            </div>
            <footer className=' mt-5 row text-light d-flex align-items-center justify-content-between text-center'>
                <div className='col-md-4'>
                    <p>Designed and Developed by Mojahidul Islam</p>
                </div>
                <div className='col-md-4'>
                    <p>Copyright © 2023 MD.</p>
                </div>
                <div className='col-md-4'>
                    <AiFillGithub className=' mx-2' />
                    <AiOutlineFacebook className=' mx-2' />
                    <AiFillLinkedin className=' mx-2' />
                </div>
            </footer>
        </div>
    )
};

export default Footer;
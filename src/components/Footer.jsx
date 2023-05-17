import { AiFillGithub, AiFillLinkedin, AiOutlineFacebook } from 'react-icons/ai';
function Footer() {
    return (
        <div>
            <div className="d-flex justify-content-center ">
                <div className=" text-light text-center">
                    <h1 className="">FIND ME ON</h1>
                    <p className=" fs-2">Feel free to <span style={{ color: "#f9004d" }}>connect</span> with me</p>
                    <div>
                        <span className='fs-3 mx-2'><AiFillGithub /></span>
                        <span className='fs-3 mx-2'><AiOutlineFacebook /></span>
                        <span className='fs-3 mx-2'><AiFillLinkedin /></span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
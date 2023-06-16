import { AiFillGithub, AiFillLinkedin, AiOutlineFacebook } from 'react-icons/ai';
function Footer() {
    return (
        <div className='background-image' style={{ backgroundColor: 'rgba(0, 0, 0,.2)' }}>

            <footer className=' mt-5 row text-light d-flex align-items-center justify-content-between text-center'>
                <div className='col-md-6 opacity-75'>
                    <p>© 2023 Tanvir</p>
                </div>
                {/* <div className='col-md-4'>
                    <p>Copyright © 2023 MDT.</p>
                </div> */}
                <div className='col-md-6'>
                    <AiFillGithub className=' mx-2 fs-3 opacity-25 cursor' />
                    <AiOutlineFacebook className=' mx-2 fs-3 opacity-25 cursor' />
                    <AiFillLinkedin className=' mx-2 fs-3 opacity-25 cursor' />
                </div>
            </footer>
        </div>
    )
};

export default Footer;
import { AiFillGithub, AiFillLinkedin, AiOutlineFacebook } from 'react-icons/ai';
function Footer() {
    return (
        <div style={{ backgroundColor: 'rgba(0, 0, 0,.2)' }}>

            <footer className=' mt-5 row text-light d-flex align-items-center justify-content-between text-center'>
                <div className='col-md-4'>
                    <p>Designed and Developed by Tanvir Hossain</p>
                </div>
                <div className='col-md-4'>
                    <p>Copyright © 2023 MDT.</p>
                </div>
                <div className='col-md-4'>
                    <AiFillGithub className=' mx-2 fs-3' />
                    <AiOutlineFacebook className=' mx-2 fs-3' />
                    <AiFillLinkedin className=' mx-2 fs-3' />
                </div>
            </footer>
        </div>
    )
};

export default Footer;
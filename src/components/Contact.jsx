import AOS from 'aos';
import { useEffect } from "react";
import Lottie from "react-lottie";
import contactjsonData from '../assets/contact.json';
function Contact() {

    useEffect(() => {
        AOS.init();
    }, [])


    const contact = {
        loop: true,
        autoplay: true,
        animationData: contactjsonData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <div>
            <h1 className=" text-center text-light font-familay" style={{ fontSize: '60px', fontWeight: "bold", }}>CONTACT <span className=" primary-color">ME</span></h1>
            <div className="row">
                <div className="col-md-6">
                    <form action="">
                        <div data-aos="fade-right">
                            <input type="text" name="name" id="name" placeholder="Your Name" className="mt-2 w-100  p-2" />
                        </div>
                        <br />
                        <div data-aos="fade-left">
                            <input type="email" name="email" id="email" placeholder="Your Email" className="mt-2 w-100  p-2" />
                        </div>
                        <br />
                        <div data-aos="fade-up-right">
                            <textarea name="textarea" id="textarea" cols="30" rows="10" className="mt-2 w-100  p-2"></textarea>
                        </div>
                        <br />
                        <div className="d-flex justify-content-center">
                            <input value="submit" type="submit" name="submit" id="submit" className="mt-2 btn" />
                        </div>
                    </form>
                </div>
                <div data-aos="fade-up-left" className="col-md-6">
                    <Lottie options={contact}></Lottie>
                </div>
            </div>
        </div>
    )
}


export default Contact;
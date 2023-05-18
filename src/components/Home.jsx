import AOS from 'aos';
import { useEffect } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineDownload, AiOutlineFacebook } from "react-icons/ai";
import Lottie from "react-lottie";
import { TypeAnimation } from "react-type-animation";
import introduceData from '../assets/introduce.json';
import animationData from '../assets/lottie.json';
import useDocumentTitle from '../hooks/useDocumentTitle';
function Home() {

    const downloadPDF = () => {
        // using Java Script method to get PDF file
        fetch('resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }

    const banner = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const introduce = {
        loop: true,
        autoplay: true,
        animationData: introduceData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };


    useEffect(() => {
        AOS.init();
    }, [])

    useDocumentTitle('Home')

    return (
        <div>
            <div className=" row">
                <div data-aos="zoom-in-up" className=" text-light my-auto d-flex align-items-center col-md-6">
                    <div>
                        <h1 className="hello">Hello, I'm</h1>
                        <h1 className="name">Tanvir Hossain</h1>
                        <TypeAnimation

                            sequence={[
                                'I am a webdeveloper', // Types 'One'
                                1000, // Waits 1s
                                'I am a web designer', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'I am a tech lover', // Types 'Three' without deleting 'Two'
                                () => {
                                    console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                                }
                            ]}

                            wrapper="span"
                            cursor={false}
                            repeat={Infinity}
                            style={{ fontSize: '2em', display: 'inline-block', color: "#f9004d" }}

                        ></TypeAnimation>

                        <p>A highly passionate and determined web developer with proficiency in major Frontend technology as well as the ability to communicate effectively in a team setting seeks to apply for the position of Intern or job as a Frontend Developer</p>

                        <button onClick={downloadPDF} className="btn btn-danger">Download Resume <span><AiOutlineDownload /></span></button>
                    </div>
                </div>
                <div data-aos="zoom-in"
                    className=" col-md-6">
                    <Lottie options={banner}
                    />
                </div>
            </div>
            <div className=' row'>
                <div data-aos="fade-right" className='text-light col-md-6'>
                    <h1>LET ME <span style={{ color: "#f9004d" }}>INTRODUCE</span> MYSELF</h1>

                    <p className='fs-5 mt-2'>Hello! First of all thanks for visiting my portfolio. I'm Tanvir from Bangladesh.</p>

                    <p className="mt-2 fs-5">
                        From my early age, I was very curious about programming/coding. Web development was my favourite sector for working and currently I'm working in Web Development field. It's my passion to learn and play with new web technologies.
                    </p>
                </div>
                <div data-aos="fade-left" className=' col-md-6'>
                    <Lottie options={introduce} />
                </div>
            </div>
            <div className="d-flex justify-content-center ">
                <div className=" text-light text-center">
                    <h1 className="">FIND ME ON</h1>
                    <p className=" fs-2">Feel free to <span style={{ color: "#f9004d" }}>connect</span> with me</p>
                    <div>
                        <span className='fs-3 mx-2 btn btn-outline-primary rounded-circle'><a target='_blank' href="https://github.com/mdtanvirgit"><AiFillGithub /></a></span>
                        <span className='fs-3 mx-2 btn btn-outline-primary rounded-circle'><a target='_blank' href=""><AiOutlineFacebook /></a></span>
                        <span className='fs-3 mx-2 btn btn-outline-primary rounded-circle'><a target='_blank' href="https://www.linkedin.com/in/md-tanvir-hossain-704917265/"><AiFillLinkedin /></a></span>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Home;

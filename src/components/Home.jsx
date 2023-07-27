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
        fetch('./tanvirhossain.pdf').then(response => {
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

                        <p>A passionate Intermediate Full Stack Developer 🚀 having an experience of building responsive Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.</p>

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
                    <h1>GET TO <span style={{ color: "#f9004d" }}>KNOW </span>ME</h1>

                    <p className='fs-5 mt-2'>I am a Self taught Front-End Web Developer based in Bangladesh with an eye for beautiful UI designs/interface.</p>

                    <p className="mt-2 fs-5">
                        I started my coding journey in 2020 during the covid era,I took up programming as an interest that year and i have picked up some skills on the long but short Road.
                    </p>
                    <p className='mt-2 fs-5'>I now build and bring out new strategies on websites and webdesigns for great user experience and best user interface for easy usage and very concise for client's best choice with my technical and professional skills.</p>
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
                        <span className='fs-3 mx-2 btn btn-outline-primary rounded-circle'><a target='_blank' href="https://github.com/developermdtanvir"><AiFillGithub /></a></span>
                        <span className='fs-3 mx-2 btn btn-outline-primary rounded-circle'><a target='_blank' href=""><AiOutlineFacebook /></a></span>
                        <span className='fs-3 mx-2 btn btn-outline-primary rounded-circle'><a target='_blank' href="https://www.linkedin.com/in/md-tanvir-hossain-704917265/"><AiFillLinkedin /></a></span>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Home;

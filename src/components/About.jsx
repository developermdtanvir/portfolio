import AOS from 'aos';
import { useEffect } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { ImProfile } from 'react-icons/im';
import { IoMdMail } from 'react-icons/io';
import bootstrap from '../assets/Skills/bootstrap.png';
import css from '../assets/Skills/css.png';
import firebase from '../assets/Skills/file-type-firebase.svg';
import vscode from '../assets/Skills/file-type-vscode.svg';
import ga from '../assets/Skills/google-analytics.png';
import html from '../assets/Skills/html.png';
import expressjs from '../assets/Skills/icons8-express-js-48.png';
import Tailwindcss from '../assets/Skills/icons8-tailwindcss-48.png';
import js from '../assets/Skills/javascript.png';
import mongodb from '../assets/Skills/mongodb-original-wordmark.svg';
import nodejs from '../assets/Skills/nodejs.png';
import reactjs from '../assets/Skills/react.png';
import useDocumentTitle from '../hooks/useDocumentTitle';
import image from './../assets/about-image.png';
function About() {


    useDocumentTitle('About')

    const skills = [
        {
            name: 'HTML',
            img: html,
            id: 1
        },
        {
            name: 'CSS',
            img: css,
            id: 2
        },
        {
            name: 'Javascript',
            img: js,
            id: 3
        },
        {
            name: 'Tailwindcss',
            img: Tailwindcss,
            id: 4
        },
        {
            name: 'Bootstrap',
            img: bootstrap,
            id: 5
        },
        {
            name: 'Reactjs',
            img: reactjs,
            id: 6
        },
        {
            name: "Mongodb",
            img: mongodb,
            id: 7
        },
        {
            name: "Express",
            img: expressjs,
            id: 7
        },
        {
            name: "Nodejs",
            img: nodejs,
            id: 8
        },
        {
            name: "Google Analytics",
            img: ga,
            id: 9
        },
        {
            name: "Firebase",
            img: firebase,
            id: 9
        },
        {
            name: "vscode",
            img: vscode,
            id: 10
        }
    ]

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div className='text-light font-familay'>
            <div className="row ">
                <div className="col-md-6">
                    <h1 className="text-center">About <span style={{ color: "#f9004d" }}>Me</span></h1>
                    <p className=" fs-3">I'm Tanvir Hossain, a professional MERN Stack Web Developer.</p>
                    <p className=" fs-3">I do Front-End Web Development, MERN Stact Web Development, PSD to HTML,Figma to HTML, Responsive web Design,etc</p>
                    <div>
                        <div className='d-flex align-items-center"'><ImProfile className=' me-2 fs-3' /><p className=' fs-4'>Tanvir Hossain</p></div>
                        <div className='d-flex align-items-center"'><IoMdMail className=' me-2 fs-3' /><p className=' fs-4'>officialtanvir@hotmail.com</p></div>
                        <div className='d-flex align-items-center"'><HiLocationMarker className=' me-2 fs-3' /><p className=' fs-4'>Hajigonj,Chandpur,Bangladesh</p></div>
                        <div></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src={image} alt="" />
                </div>
            </div>
            <div className='mt-5'>
                <h1 style={{ fontSize: "50px" }} className=' text-center'>My <span style={{ color: "#f9004d" }}>Skills</span> and <span style={{ color: "#f9004d" }}>Tools</span></h1>

                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4 m-0 px-4 px-md-5 d-flex justify-content-center g-5">
                    {
                        skills.map(skill => <div data-aos="fade-up-left" className=' my-auto col-md-3 row-md-3 text-center p-2 '>
                            <img className='h-75 w-75 img-fluid' src={skill.img} alt="" />
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}


export default About;
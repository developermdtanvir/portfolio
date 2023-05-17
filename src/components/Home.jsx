import { AiOutlineDownload } from "react-icons/ai";
import Lottie from "react-lottie";
import { TypeAnimation } from "react-type-animation";
import animationData from '../assets/lottie.json';
function Home() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className=" row">
            <div className=" text-light my-auto d-flex align-items-center col-md-6">
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

                    <button className="btn btn-danger">Download Resume <span><AiOutlineDownload /></span></button>
                </div>
            </div>
            <div className=" col-md-6">
                <Lottie options={defaultOptions}
                />
            </div>
        </div>
    )
};
export default Home;

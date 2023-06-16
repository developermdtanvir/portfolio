import { useEffect, useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function Project() {
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => {
                setProject(data);
            })
    }, [])

    useDocumentTitle('Project');

    return (
        <div>
            <h1 className="text-center text-light">Personal <span style={{ color: `rgb(249, 0, 77)` }}>Projects</span></h1>
            <div className="row mx-auto">
                {
                    project.map(item => <div className="card col-md-3 m-2 mx-auto" style={{ width: '18rem' }}>
                        <img src={item.image} className="card-img-top img-fluid h-50" alt="..." />
                        <div className="card-body">
                            <p className="card-text">i{item.description}</p>
                            <a target="_blank" className="btn btn-primary d-flex justify-content-center" href={item.websiteLink}>Preview</a>
                        </div>

                    </div>)
                }
            </div>
        </div >
    )
}

export default Project;
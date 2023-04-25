import { useState } from "react";


function Mutable(params) {
    const [title, setTitle] = useState({
        firstTitle: "Java",
        lastTitle: "Script"
    });

    const changeTitle = () => {
        const cloneTitle = {
            ...title,
        }
        cloneTitle.firstTitle = "React";
        cloneTitle.lastTitle = "JS";
        setTitle(cloneTitle)
    }
    return (
        <div>
            <h1>{title.firstTitle + " " + title.lastTitle}</h1>
            <button onClick={changeTitle}>changeTitle</button>
        </div>
    )

}


export default Mutable;
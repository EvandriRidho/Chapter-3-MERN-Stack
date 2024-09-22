import { useState } from "react"


const WebTitle = (props) => {
    const desc = props.desc
    const [title, setTitle] = useState(props.title)
    const changeTitle = () => {
        setTitle("Ridho Website")
    }
    return (
        <header>
            <h1>{title}</h1>
            <p>{desc}</p>
            <button onClick={changeTitle}>ChangeTitle</button>
        </header>
    )
}

export default WebTitle;
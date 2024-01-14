import React, {useState} from 'react'

export default function TextProject(props) {
    const [text, setText] = useState('');
    const [myStyle, setStyle] = useState({
        color: 'black', background: 'white'
    });
    const [btnText, setbtnText] = useState("Enable Dark Mode");
    const changed = (event) => {
        setText(event.target.value)
    }
    const clicked = () => {
        let e = text.toUpperCase();
        setText(e);
        props.showalert("Converted to Uppercase", "success");
    }
    const clicked1 = () => {
        let e = text.toLowerCase();
        setText(e);
        props.showalert("Converted to LowerCase", "success");
    }
    const copy = () => {
        let e = document.getElementById("Textarea1");
        e.select();
        navigator.clipboard.writeText(e.value);
        props.showalert("Copied", "success");
    }
    const removespace = () => {
        let e = text.split(/[ ]+/);
        setText(e.join(" "));
        props.showalert("ExtraSpacesRemoved", "success");
    }
    const cleartext = () => {
        setText('');
    }
    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setStyle({
                color: 'white', background: 'black'
            })
            document.body.style.backgroundColor = 'black';
            setbtnText("Enable Light Mode");
        } else {
            setStyle({
                color: 'black', background: 'white'
            })
            document.body.style.backgroundColor = 'white';
            setbtnText("Enable Dark Mode");
        }
    }
    return (<>

        <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h1>{props.heading}</h1>
            <textarea className="form-control" style={{
                backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
                color: props.mode === 'light' ? 'black' : 'white'
            }}
                      value={text} onChange={changed} id="Textarea1" rows="8"></textarea>
            <button className="btn btn-primary my-3 mx-1 my-1" onClick={clicked}>
                Change to Uppercase
            </button>
            <button className="btn btn-primary my-3 mx-1 my-1" onClick={clicked1}>
                Change to Lowercase
            </button>
            <button className="btn btn-primary my-3 mx-1 my-1" onClick={cleartext}>
                Clear Text
            </button>
            <button className="btn btn-primary my-3 mx-1 my-1" onClick={copy}>
                Copy Text
            </button>
            <button className="btn btn-primary my-3 mx-1 my-1" onClick={removespace}>
                Remove Spaces
            </button>

            <h2>Your Summary:</h2>
            <p>{text.split(/\s+/).filter(word => word !== '').length} words and {text.length} character</p>
            <p>{0.008 * text.split("").length}</p>
            <h2>Preview:</h2>
            <p>{text}</p>
            <button className="btn btn-primary" type="button" onClick={toggleStyle}>{btnText}</button>
        </div>
    </>)
}

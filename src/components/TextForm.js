import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert(" Converted to UpperCase ","success");
    }
    const handledownclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert(" Converted to LowerCase ","success");
    }
    const handleclearclick = () => {
        setText("");
        props.showAlert(" Cleared the text ","success");
    }
    const handlestringclick = () => {
        let newtext = text.split("").map(char => char.charCodeAt(0)).join(" ");
        setText(newtext);
        props.showAlert(" Converted to number","success");
    }
    const handlenumberclick = () => {
        let newtext = text.trim().split(/\s+/).map(num => String.fromCharCode(Number(num))).join("");
        setText(newtext);
        props.showAlert("Converted to String ","success");
    }
    const handleOnchange = (e) => {
        setText(e.target.value);
    }

    const [text, setText] = useState('');

    // extra style for dark mode button glow
    const buttonStyle = props.mode === 'dark'
        ? { boxShadow: '0 0 10px #0dcaf0' }
        : {};

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnchange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#495057' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743'
                        }}
                        id="mybox"
                        rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2" style={buttonStyle} onClick={handleUpclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" style={buttonStyle} onClick={handledownclick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" style={buttonStyle} onClick={handleclearclick}>Clear Text</button>
                <button className="btn btn-primary mx-2" style={buttonStyle} onClick={handlestringclick}>Convert to Number</button>
                <button className="btn btn-primary mx-2" style={buttonStyle} onClick={handlenumberclick}>Convert to Text</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter(word => word.length !== 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter(word => word.length !== 0).length} minutes taken to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the text box above to preview"}</p>
            </div>
        </>
    )
}


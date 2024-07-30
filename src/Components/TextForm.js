import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);

    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);

    }
    
    const handleClrClick = () => {
        let newText = "";
        setText(newText);

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));

    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    const [text, setText] = useState("");



    return (
        <>
            <div className="container my-3">
                <h3>Enter Your Text To Ananlyze</h3>
            </div>
            <div className="container form-floating my-3">
                <textarea className="form-control" placeholder="Leave a comment here" style={{backgroundColor: props.mode==='dark'?'#2516268a':'white', color : props.mode==='dark'?'white':'black' ,  height: 200 + "px" }} value={text} onChange={handleOnChange} id="floatingTextarea"></textarea>
            </div>
            <div className='container my-2'>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>To Uppercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>To Lowercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extraspaces</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleClrClick}>Clear Textarea</button>
            </div>
            <div className='container my-3'>
                <h3><u>Summary:</u></h3>
                <p> {text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
            </div>
            <div className='container my-3'>
                <h3><u>Preview:</u></h3>
                <p>{text.length>0?text:"Enter the text above to preview"}</p>
            </div>

        </> 
    )
}

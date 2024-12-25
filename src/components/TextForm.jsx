import React from 'react'
import { useState } from 'react'
import Button from './Button';

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleClear = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
    }
    const handleReplace = () => {
        let newText = text.replaceAll(fWord, rWord);
        setText(newText);
        findWord("");
        replaceWord("")
        props.showAlert("Replaced", "success");

    }

    const handleOnChange = (event) => {
        setText(event.target.value);

    }
    const handleFWord = (event) => {
        findWord(event.target.value);

    }
    const handleRWord = (event) => {
        replaceWord(event.target.value);
    }

    const handleExtraSpaces = (event) => {
        // Regex
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra Spaces Removed", "success");

    }

    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
        props.showAlert("Reversed", "success");
    };

    // Text to Speech

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speech Generated", "success");
    }

    const handleCapClick = () => {
        let newText = () => {
            let finalStrArr = [];
            let strArr = text.split(" ")
            strArr.forEach(element => {
                finalStrArr.push(element.charAt(0).toUpperCase() + element.slice(1));
            });
            return finalStrArr.join(" ");
        }
        setText(newText)
        props.showAlert("Capitalized", "success");
    }

    const handleSaveClick = (e) => {
        localStorage.setItem("Text", text);
        props.showAlert("Saved", "success");
    }

    // const handleRetrieve = (e) => {
    //     let a = localStorage.getItem("Text");
    //     setText(a);
    //     props.showAlert("Retrieved", "success");
    // }

    const handleSPerLineClick = () => {
        let newText = text.replaceAll('.', "\n");
        setText(newText);
        props.showAlert("Converted to Sentences", "success");
    }

    const handleCopy = () => {
        // var text = document.getElementById('myBox');
        // text.select();
        // navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied", "success");
    }

    const [text, setText] = useState("");
    const [fWord, findWord] = useState("");
    const [rWord, replaceWord] = useState("");

    let  words = text.split(/\s+/).filter((element) => {
        return (
            element.length !== 0
        )
    }).length;

    return (
        <>
            <div className="container">
                <button className="btn mx-2 my-2 bg-danger"></button>
                <button className="btn mx-2 my-2 bg-primary"></button>
                <button className="btn mx-2 my-2 bg-success"></button>
                <button className="btn mx-2 my-2 bg-warning"></button>
            </div>

            <div className='container ' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

                <h4 >{props.heading}</h4>

                <div className="my-3">
                    <textarea className="form-control" id="myBox" style={{
                        backgroundColor: props.mode === 'light' ? 'white' : '#D3D3D3',
                        color: props.mode === 'dark' ? 'white' : 'black',
                        placeholderColor: props.mode === 'dark' ? 'white' : 'black'
                    }} rows="8" onChange={handleOnChange} value={text} placeholder={text}></textarea>
                </div>

                <div className="container">
                    <Button onClick={handleClear} text='Clear' />
                    <Button onClick={handleCapClick} text='Capitalize' />
                    <Button onClick={handleLowClick} text='Lower Case' />
                    <Button onClick={handleUpClick} text=' Upper Case' />
                    <Button onClick={handleExtraSpaces} text='Remove Extra Spaces' />
                    <Button onClick={handleReverse} text='Reverse' />
                    <Button onClick={handleSPerLineClick} text='Sentences' />
                    <Button onClick={speak} text='Speak' />
                </div>

                <div className='container'>
                    <label className='mx-2'>First Word</label>
                    <input className="text my-2 mx-2" id='fWord' onChange={handleFWord} value={fWord}></input>
                    <label className='mx-2'>Second Word</label>
                    <input className="text my-3 mx-2" id='rWord' onChange={handleRWord} value={rWord}></input>
                    <Button onClick={handleReplace} text='Replace' />
                </div>

                <div className="container">
                    <Button onClick={handleCopy} text='Copy' />
                    <Button onClick={handleSaveClick} text='Save' />
                    {/* <Button onClick={handleRetrieve} text='Retrieve' /> */}
                </div>

            </div>

            <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h4>Text Summary</h4>
                <p>{words} Words, {text.length} Characters</p>
                <p>Reading Time : {0.008 * words}</p>
                <h4>Preview</h4>
                <p>{text.length > 0 ? text : 'Nothing to Preview'}</p>
            </div>


        </>

    )
}

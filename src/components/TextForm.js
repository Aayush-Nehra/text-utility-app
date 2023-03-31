import React, {useState} from "react";

export default function TextForm(props) {
  //Setting Darkmode Style
  let textStyle = {
    color: 'white'
  }
  if (props.mode === 'light')
    textStyle.color = 'black'
  else
    textStyle.color = 'white'

  //Text Util Functions
  let convertToUpper = () => {
    let newText = text;
    setText(newText.toUpperCase())
  }
  let convertToLower = () => {
    let newText = text;
    setText(newText.toLowerCase())
  }
  let chanegeText = (event) => {
    setText(event.target.value)
  }
  let clearText = () => {
    setText('')
  }

  let capFirstLetter = ()=> {
    const finalSentence = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    setText(finalSentence);
  }

  const [text, setText] = useState("Enter some text");
  return (
    <>
    <div className="container">
      <div className="mb-3">
      <h2 style={textStyle}>{props.heading}</h2>
        <textarea
          rows="8"
          id="myBox"
          className="form-control"
          value={text}
          onChange={chanegeText}
          style={props.mode==='light'?textStyle:{color: 'white', backgroundColor: '#4a4a4b'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={convertToUpper}>Upper Case</button>
      <button className="btn btn-primary mx-1" onClick={convertToLower}>Lower Case</button>
      <button className="btn btn-primary mx-1" onClick={capFirstLetter}>Capatalize First Letter</button>
      <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
    </div>
    <div className="container my-3" style={textStyle}>
      <h2>Your Text Summary</h2>
      <p>Your text has {text.split(" ").length} words and {text.length} characters</p>
      <p>Time to read is {0.008*text.split(" ").length} minutes</p>
      <h2>Text Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}

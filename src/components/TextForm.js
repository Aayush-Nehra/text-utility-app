import React, {useState} from "react";
import "../App.css"

export default function TextForm(props) {
  //Text Util Functions
  let convertToUpper = () => {
    let newText = text;
    setText(newText.toUpperCase())
    props.showUtilSuccessMessage("Text converted to upper case");
  }
  let convertToLower = () => {
    let newText = text;
    setText(newText.toLowerCase())
    props.showUtilSuccessMessage("Text converted to lower case");
  }
  
  let clearText = () => {
    props.showUtilSuccessMessage("Text cleared");
    setText('')
  }

  let capFirstLetter = ()=> {
    const finalSentence = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    setText(finalSentence);
    props.showUtilSuccessMessage("First letter of each word was capitalized");
  }
  
  function WordCounter() {
    let textAreaText = text.trim()
    let noOfWords = 0;
    if(textAreaText === '')
      noOfWords = 0
    else{
      let words = textAreaText.split(/\s+/)
      noOfWords = words.filter(word => word!=='').length
    }
    return (
      <>
        {noOfWords}
      </>
    )
  }

  //Allows user to enter value to the text area field
  let setTargetText = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState("Enter some text");
  return (
    <>
    <div className="container">
      <div className="mb-3">
      <h2 id={`text-${props.mode}`}>{props.heading}</h2>
        <textarea
          rows="8"
          id="myBox"
          className={`form-control textarea-${props.mode}`}
          value={text}
          onChange={setTargetText}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" disabled={text.length === 0} onClick={convertToUpper}>Upper Case</button>
      <button className="btn btn-primary mx-1" disabled={text.length === 0} onClick={convertToLower}>Lower Case</button>
      <button className="btn btn-primary mx-1" disabled={text.length === 0} onClick={capFirstLetter}>Capatalize First Letter</button>
      <button className="btn btn-primary mx-1" disabled={text.length === 0} onClick={clearText}>Clear Text</button>
    </div>
    <div className={`container my-3`} id={`text-${props.mode}`}>
      <h2>Your Text Summary</h2>
      <p>Your text has {<WordCounter/>} words and {text.length} characters</p>
      <p>Time to read is {0.008*text.split(/\s+/).filter(word => word!=='').length} minutes</p>
      <h2>Text Preview</h2>
      <p>{text.length === 0?"Enter some text in text box to preview":text}</p>
    </div>
    </>
  );
}

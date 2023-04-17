import React, {useState} from "react";
import "../App.css"

export default function TextForm(props) {
  //Text Util Functions
  let convertToUpperCase = () => {
    let newText = formInputText;
    setFormText(newText.toUpperCase())
    props.showUtilSuccessMessage("Text converted to upper case");
  }
  let convertToLowerCase = () => {
    let newText = formInputText;
    setFormText(newText.toLowerCase())
    props.showUtilSuccessMessage("Text converted to lower case");
  }
  
  let clearText = () => {
    props.showUtilSuccessMessage("Text cleared");
    setFormText('')
  }

  let capitailzeFirstLetter = ()=> {
    const finalSentence = formInputText.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    setFormText(finalSentence);
    props.showUtilSuccessMessage("First letter of each word was capitalized");
  }
  
  function WordCounter() {
    let textAreaText = formInputText.trim()
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
    setFormText(event.target.value)
  }
  const [formInputText, setFormText] = useState("Enter some text");
  return (
    <>
    <div className="container">
      <div className="mb-3">
      <h2 id={`text-${props.mode}`}>{props.heading}</h2>
        <textarea
          rows="8"
          id="myBox"
          className={`form-control textarea-${props.mode}`}
          value={formInputText}
          onChange={setTargetText}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" disabled={formInputText.length === 0} onClick={convertToUpperCase}>Upper Case</button>
      <button className="btn btn-primary mx-1" disabled={formInputText.length === 0} onClick={convertToLowerCase}>Lower Case</button>
      <button className="btn btn-primary mx-1" disabled={formInputText.length === 0} onClick={capitailzeFirstLetter}>Capatalize First Letter</button>
      <button className="btn btn-primary mx-1" disabled={formInputText.length === 0} onClick={clearText}>Clear Text</button>
    </div>
    <div className={`container my-3`} id={`text-${props.mode}`}>
      <h2>Your Text Summary</h2>
      <p>Your text has {<WordCounter/>} words and {formInputText.length} characters</p>
      <p>Time to read is {0.008*formInputText.split(/\s+/).filter(word => word!=='').length} minutes</p>
      <h2>Text Preview</h2>
      <p>{formInputText.length === 0?"Enter some text in text box to preview":formInputText}</p>
    </div>
    </>
  );
}

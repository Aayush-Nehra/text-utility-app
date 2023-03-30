import React, {useState} from "react";

export default function TextForm(props) {

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

  const [text, setText] = useState("Enter some text");
  return (
    <div>
      <div className="mb-3">
      <h1>{props.heading}</h1>
        <textarea
          rows="8"
          id="myBox"
          className="form-control"
          value={text}
          onChange={chanegeText}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={convertToUpper}>ConvertToUpperCase</button>
      <button className="btn btn-primary" onClick={convertToLower}>ConvertToLowerCase</button>
    </div>
  );
}

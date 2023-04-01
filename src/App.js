import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from "react";
import Alert from "./components/Alert";

function App() {
  const [mode,setMode] = useState('light')
  let toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#052d68'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  const [message,setAlertMessage] = useState("");

  let showAlert = (message) => {
    setAlertMessage(message)
    setTimeout(()=>{
      setAlertMessage("");
    },1200)
  }

  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert message={message}/>
      <div className="container my-3">
        <TextForm heading="Enter text to update" mode={mode} showUtilSuccessMessage={showAlert}/>
      </div>
    </div>
  );
}

export default App;

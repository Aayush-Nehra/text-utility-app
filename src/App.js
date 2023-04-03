import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  //Setting objects to format different parts of the app, need to create css to take care of formatting
  const [mode, setMode]  = useState('light')
  let websiteColorMode = (mode) => {
    switch (mode) {
      case 'dark':
        setMode('dark')
        document.body.style.backgroundColor = '#052d68'
        break;
      case 'light':
        setMode('light')
        document.body.style.backgroundColor = 'white'
        break;
      case 'eco':
        setMode('eco')
        document.body.style.backgroundColor = 'green'
        break;
    }
  }

  const [message, setAlertMessage] = useState("");

  let showAlert = (message) => {
    setAlertMessage(message)
    setTimeout(() => {
      setAlertMessage("");
    }, 1200)
  }

  return (
    <Router>
      <div>
        <Navbar title="TextUtils" mode={mode} websiteColorMode={websiteColorMode} />
        <Alert message={message} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>}/>
            <Route path="/" element={<TextForm heading="Enter text to update" mode={mode} showUtilSuccessMessage={showAlert} />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

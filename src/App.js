import "./App.css";
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
  const [mode, setMode] = useState({
    modeType: 'light',
    textStyle: {
      color: 'black',
    },
    navbarStyle: {
      color: 'black',
      backgroundColor: '#f8f9fa'
    },
    textAreaStyle: {
      color: 'black',
      backgroundColor: 'white'
    }

  })
  let websiteColorMode = (mode) => {
    switch (mode) {
      case 'dark':
        setMode({
          modeType: 'dark',
          textStyle: {
            color: 'white',
          },
          navbarStyle: {
            color: 'white',
            backgroundColor: '#343A40'
          },
          textAreaStyle: {
            color: 'white',
            backgroundColor: '#4a4a4b'
          }
        })
        document.body.style.backgroundColor = '#052d68'
        break;
      case 'light':
        setMode({
          modeType: 'light',
          textStyle: {
            color: 'black',
          },
          navbarStyle: {
            color: 'black',
            backgroundColor: '#f8f9fa'
          },
          textAreaStyle: {
            color: 'black',
            backgroundColor: 'white'
          }
        })
        document.body.style.backgroundColor = 'white'
        break;
      case 'eco':
        setMode({
          modeType: 'eco',
          textStyle: {
            color: 'white',
          },
          navbarStyle: {
            color: 'black',
            backgroundColor: 'yellow'
          }
        })
        document.body.style.backgroundColor = 'green'
        break;
      default:
        console.log(`No mode selected.`);
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
            <Route path="/about" element={<About />}/>
            <Route path="/" element={<TextForm heading="Enter text to update" mode={mode} showUtilSuccessMessage={showAlert} />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

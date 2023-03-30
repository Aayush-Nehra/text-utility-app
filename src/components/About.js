import React from 'react'
import { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })

    const [colorModeBtnText, toggleBtnTxt] = useState("Enable Dark Mode")

    let toggleStyle = ()=>{
        if(myStyle.color === 'black')
        {
            setMyStyle({
                color: "white",
                backgroundColor: "black"
            })
            toggleBtnTxt("Enable Light Mode")
        }
        else {
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
            toggleBtnTxt("Enable Dark Mode")
        }
    }
    return (
        <>
            <div className='container' style={myStyle}>
                <p>This is my text utils app. It is a web to assist people in daily tasks by providing tools for manipulating text data. </p>
            </div>
            <button onClick={toggleStyle}>{colorModeBtnText}</button>
        </>

    )
}

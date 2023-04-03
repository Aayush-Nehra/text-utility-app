import React from 'react'
import '../App.css'

export default function About(props) {
    
    return (
        <>
            <h2 id={`text-${props.mode}`}>About Us</h2>
            <div className='container' id={`text-${props.mode}`}>
                <p>This is my text utils app. It is a web to assist people in daily tasks by providing tools for manipulating text data. </p>
            </div>
        </>

    )
}

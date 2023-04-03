import React from "react";

export default function Alert(props) {
    return (
        <div style={{height: '50px'}}>
            {props.message && <>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Success:</strong> {props.message}
            </div>
            </>}
        </div>
        
    );
}

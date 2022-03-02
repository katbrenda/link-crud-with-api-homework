import React from "react";
const Link = (props) =>{
    return(
        <div>
            <h1>Id: {props.id}</h1>
            <h1>Username: {props.username}</h1>
            <h1>Title: {props.title}</h1>
//maybe add buttons
        </div>
    )
}


export default Link
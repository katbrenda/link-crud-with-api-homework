// import React from "react";
import React, {useContext} from 'react'
import { DataContext } from '../providers/DataProvider'

const Link = (props) =>{
    const { links, getLinks, createLink, updateLink ,deleteLink} = useContext(DataContext)
    return(
        <div>
            <h1>Id: {props.id}</h1>
            <h1>Username: {props.username}</h1>
            <h1>Title: {props.title}</h1>
            <button onClick={()=>deleteLink(props.id)}>delete link</button>
            <button onClick={()=>updateLink(props.id)}>edit link</button>
{/* maybe add buttons */}
        </div>
    )
}


export default Link
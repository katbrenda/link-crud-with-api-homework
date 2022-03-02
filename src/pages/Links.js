import React, {useContext} from 'react'
import { DataContext } from '../providers/DataProvider'
import Link from './Link'
import { Link as ReactRouterLink } from "react-router-dom";

const Links = ()=>{
    //useContext always return object just destructor keys
    
    const { links, getLinks, createLink, updateLink ,deleteLink} = useContext(DataContext)
    const renderLinks= ()=>{
        return links.map((props)=>{
            return(
                <div>
                    <h1>Id: {props.id}</h1>
                    <h1>Username: {props.username}</h1>
                    <h1>Title: {props.title}</h1>
                    <button onClick={()=>deleteLink(props.id)}>delete link</button>
                    <button onClick={()=>updateLink(props.id)}>update link</button>
                    <ReactRouterLink to={`links/${props.id}/edit`} state={{...props}}>edit</ReactRouterLink>
        {/* maybe add buttons */}
                </div>
            )
            // return <Link key={link.id} {...link} deleteLink={deleteLink} updateLink={updateLink}/>

        })
    }
    
    return (
        <div>
        <h1>Links here</h1>

        <div>{links && renderLinks()}</div>

        <div>{JSON.stringify(links)}</div>
        <button onClick={getLinks}>Get Links</button>
        <button onClick={()=>createLink( {title:'title here', username:'katherine'} )}>create link</button>
        <button onClick={()=>updateLink( {id:19, title:'UPDATED'} )}>update link</button>
        <button onClick={()=>deleteLink(19)}>delete link</button>

        </div>
    )
}

export default Links
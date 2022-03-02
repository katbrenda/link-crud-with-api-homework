import React, {useContext} from 'react'
import { DataContext } from '../providers/DataProvider'
import Link from './Link'

const Links = ()=>{
    //useContext always return object just destructor keys
    
    const { links, getLinks, createLink, updateLink ,deleteLink} = useContext(DataContext)
    const renderLinks= ()=>{
        return links.map((link)=>{
            return <Link key={link.id} {...link} deleteLink={deleteLink} updateLink={updateLink}/>
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
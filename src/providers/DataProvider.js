import axios from "axios";
import React, { useState } from "react";

// MENU
// GET /api/links => return all links

// POST /api/links {description,username(required), title, url} => create link

// GET /api/links/:id => gets one link ({data:links})

// PATCH /api/links/:id {description,username(required), title, url}

// PUT /api/links/:id => goes to api/links_controller#update => update link

// DELETE /api/links/:id => delete link

// live api https://link-app-sp22.herokuapp.com

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  const baseurl = 'https://link-app-sp22.herokuapp.com'
  const [links, setLinks] = useState([]);

  // get links from api/db and update links state in UI
  const getLinks = async()=>{
     try{
       // you are the customer at the restaurant
       let res = await axios.get(`${baseurl}/api/links`)
       console.log(res)
       // update UI
       setLinks(res.data)
     }catch(err){
       alert('err occured')
     }
  }

  // create a link to api/db and update links state in UI
  const createLink = async(linkObjFromForm)=>{
    try{
      // create to db
      let res = await axios.post(`${baseurl}/api/links`, linkObjFromForm)
      console.log('res:', res)
      // update UI
      setLinks([res.data, ...links])
    }catch(err){
      alert('err occured')
      console.log(err.response)
    }
  }

  // update a link to api/db and update links state in UI
  const updateLink = async(linkObjFromForm)=>{
    if(!linkObjFromForm.id){
      alert('no id given will not work')
      return 
    }
    try{
      // update to db
      let res = await axios.put(`${baseurl}/api/links/${linkObjFromForm.id}`, linkObjFromForm)
      console.log('res:', res)
 
      // update UI 
      let updatedLink = res.data 
      let updateLinks = links.map(link => link.id === updatedLink.id ? updatedLink : link )
      setLinks(updateLinks)
    }catch(err){
      alert('err occured')
      console.log(err.response)
    }
  }
  
  // delete a link to api/db and update links state in UI
  const deleteLink = async (id) =>{
    try{
      //Delete from db
      let res = await axios.delete(`${baseurl}/api/links/${id}`)
      console.log(res)
      
      // Delete from links state
      setLinks(links.filter(l => l.id !== id))
    }catch(err){
      alert('err occured')
    }
  }


  // create an object that will be 'global state'
  const dataProviderThing = {
      updateLink,
      createLink,
      getLinks,
      links,
      deleteLink
         
}
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={dataProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
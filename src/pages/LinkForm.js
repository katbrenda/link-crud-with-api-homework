import React from 'react'
import { useParams } from 'react-router-dom'

const LinkForm = ()=>{
    const params = useParams()
    return (
        <div>
          <h1>LinkForm here</h1>
          <p>{params.id ? 'Update Form':'New Form'}</p>
          <p>id: {params.id ? params.id :'No id'}</p>
        </div>
    )
}

export default LinkForm
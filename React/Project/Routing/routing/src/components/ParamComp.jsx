import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComp = () => {
    
    const { id } = useParams();

    return (
      <div>
        The parameter is: {id}
      </div>
    )

}

export default ParamComp

import React from 'react'
import {Link}  from "react-router-dom"


const PokimonListCard = ({pokimonData}) => {
    return (
        <div>
          {
              pokimonData.map((value,index)=>{
                  return (
                    <Link to={"/pokimon/"+value.name} key={index}>
                    <h1>{value.name}</h1>
                    </Link>
                  )
                 
              })
          }
        </div>
    )
}

export default PokimonListCard

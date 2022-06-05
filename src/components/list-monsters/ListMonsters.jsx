import React from 'react'
import './ListMonsters.css'

const ListMonsters = ({ filteredData }) => {
   return (
      <div className='list-monsters-container'>
         {
            filteredData.map((monster) => {
               return (
                  <div className='monster-container' key={monster.id}>
                     <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="" />
                     <h2 className='monster-name'>{monster.name}</h2>
                     <p className='monster-email'>{monster.email}</p>
                  </div>
               )
            })
         }
      </div>
   )
}

export default ListMonsters
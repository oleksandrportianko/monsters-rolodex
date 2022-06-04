import React from 'react'

const ListMonsters = ({ filteredData }) => {
   return (
      <div className='list-monsters-container'>
         {
            filteredData.map((user) => {
               return (
                  <div key={user.id}>
                     <h1>{user.name}</h1>
                  </div>
               )
            })
         }
      </div>
   )
}

export default ListMonsters
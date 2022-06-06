import React from 'react'
import './Search.css'

const Search = ({ setFilteredData, data }) => {
   
   const searchFilter = (event) => {
      const textLower = event.target.value.toLowerCase()
      
      const filtered = data.filter(item => {
         return item.name.toLowerCase().includes(textLower)
      })

      setFilteredData(filtered)
   }

   return (
      <input className='search-input' type="text" placeholder='Search monsters' onChange={searchFilter} />
   )
}

export default Search
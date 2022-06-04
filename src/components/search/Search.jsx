import React from 'react'

const Search = ({ setFilteredData, data }) => {

   const searchFilter = (text) => {
      const textLower = text.toLowerCase()
      
      const filtered = data.filter(item => {
         return item.name.toLowerCase().includes(textLower)
      })

      setFilteredData(filtered)
   }

   return (
      <input type="text" placeholder='Search monsters' onChange={(e) => searchFilter(e.target.value)} />
   )
}

export default Search
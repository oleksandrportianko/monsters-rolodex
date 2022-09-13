import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './MainPage.css'
import Search from '../../components/search/Search'
import ListMonsters from '../../components/list-monsters/ListMonsters'

const Main = () => {
   const [data, setData] = useState([])
   const [filteredData, setFilteredData] = useState([])

   const searchFilter = (event) => {
      const textLower = event.target.value.toLowerCase()
      
      const filtered = data.filter(item => {
         return item.name.toLowerCase().includes(textLower)
      })

      setFilteredData(filtered)
   }

   useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
         .then((response) => {
            setData(response.data)
            setFilteredData(response.data)
         })
   }, [])

   return (
      <div className='main-page-container'>
         <h1 className='main-page-title'>Monsters rolodex</h1>
         <Search searchFilter={searchFilter} data={data} placeholder='Search monsters' />
         <ListMonsters filteredData={filteredData} />
      </div>
   )
}

export default Main
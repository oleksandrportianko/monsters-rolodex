import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './MainPage.css'
import Search from '../../components/search/Search'
import ListMonsters from '../../components/list-monsters/ListMonsters'

const Main = () => {
   const [data, setData] = useState([])
   const [filteredData, setFilteredData] = useState([])

   useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
         .then((response) => {
            setData(response.data)
            setFilteredData(response.data)
         })
   }, [])

   return (
      <div className='main-page-container'>
         <Search setFilteredData={setFilteredData} data={data} />
         <ListMonsters filteredData={filteredData} />
      </div>
   )
}

export default Main
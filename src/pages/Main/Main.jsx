import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Main.css'

const Main = () => {
   const [data, setData] = useState([])
   const [filteredData, setFilteredData] = useState([])

   const searchFilter = (text) => {
      console.log(text)
      const textLower = text.toLowerCase()
      
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

   console.log(data)

   return (
      <div className='main-page-container'>
         <input type="text" placeholder='Search monsters' onChange={(e) => searchFilter(e.target.value)} />
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

export default Main
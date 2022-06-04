import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Main.css'

const Main = () => {
   const [data, setData] = useState([])

   useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
         .then((response) => setData(response.data))
   }, [])

   console.log(data)

   return (
      <div>
         {
            data.map((user) => {
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
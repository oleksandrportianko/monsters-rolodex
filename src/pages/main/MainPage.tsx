import React, { useEffect, useState, ChangeEvent } from 'react'

import Search from '../../components/search/Search'
import ListMonsters from '../../components/list-monsters/ListMonsters'

import { getData } from '../../utils/data.util'

import './MainPage.css'

export type Monster = {
   id: string;
   name: string;
   email: string;
}

const Main = () => {
   const [data, setData] = useState<Monster[]>([])
   const [filteredData, setFilteredData] = useState<Monster[]>([])

   const searchFilter = (event: ChangeEvent<HTMLInputElement>): void => {
      const textLower = event.target.value.toLowerCase()
      
      const filtered = data.filter((item: Monster) => {
         return item.name.toLowerCase().includes(textLower)
      })

      setFilteredData(filtered)
   }

   useEffect(() => {
      const fetchMonsters = async () => {
         const monsters = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
         setData(monsters)
         setFilteredData(monsters)
      }

      fetchMonsters()
   }, [])

   return (
      <div className='main-page-container'>
         <h1 className='main-page-title'>Monsters rolodex</h1>
         <Search searchFilter={searchFilter} placeholder='Search monsters' />
         <ListMonsters filteredData={filteredData} />
      </div>
   )
}

export default Main
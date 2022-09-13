import { Monster } from '../../pages/main/MainPage'

import './ListMonsters.css'

type FilteredData = {
   filteredData: Monster[]
}

const ListMonsters = ({ filteredData }: FilteredData) => {
   return (
      <div className='list-monsters-container'>
         {
            filteredData.map((monster: Monster) => {
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
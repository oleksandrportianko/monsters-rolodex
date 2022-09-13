import { ChangeEventHandler } from 'react'

import './Search.css'

type SearchBoxProps = {
   placeholder?: string;
   searchFilter: (ChangeEventHandler<HTMLInputElement>) 
}

const Search = ({ searchFilter, placeholder }: SearchBoxProps) => {
   return (
      <input className='search-input' type="text" placeholder={placeholder} onChange={searchFilter} />
   )
}

export default Search
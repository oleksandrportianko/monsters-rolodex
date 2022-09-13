import { ChangeEvent } from 'react'

import './Search.css'

type SearchBoxProps = {
   placeholder?: string;
   searchFilter: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ searchFilter, placeholder }: SearchBoxProps) => {
   return (
      <input className='search-input' type="text" placeholder={placeholder} onChange={searchFilter} />
   )
}

export default Search
import NavStack from '../components/NavStack'
import React from 'react'
import Search from './Search'

const SearchStack = () => {
  return (
    <NavStack mainRoute={'Search'} mainComponent={Search} />
  )
}

export default SearchStack
import React, { useState } from 'react'
import GetItemsSearch from '../GetItemsSearch'
import SearchBar from '../SearchBar'

function FullSearch() {
  const items=["cat", "dog", "music", "shopping", "hair brush", "hello world", "pop"]
  const[search, setsearch] = useState("")
  return (
    <div>
       <SearchBar searchInput={(e)=>setsearch(e)}/>
      <GetItemsSearch items={items} search={search}/>
    </div>
  )
}

export default FullSearch
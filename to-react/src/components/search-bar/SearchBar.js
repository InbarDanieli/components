
function SearchBar(props) {
  return (
    <div>
      search: <input onChange={(e)=>{props.searchInput(e.target.value)}}></input>
    </div>
  )
}

export default SearchBar
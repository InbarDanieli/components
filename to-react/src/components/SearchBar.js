import React, { useState } from "react";

function SearchBar(props) {
  const itemsArr = props.items

  const [input, setInput] = useState("")
  function HandlerInput(e) {
    setInput(e.target.value)
  }

  let arritems = itemsArr.filter((items) => { return items.includes(input) })
console.log(input);

  return (
    <div>
      <input onChange={HandlerInput} value = {input}/>
      <button style={{ display: input === "" ? "none" : "inline" }} onClick={() => { setInput("")}}>CLR</button>
      <ul>
        {arritems.map((items) => { return (<li key={items}>{items}</li>) })}
      </ul>
    </div>
  )
}

export default SearchBar
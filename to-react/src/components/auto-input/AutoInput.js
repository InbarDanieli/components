import React, { useState } from "react"

function AutoInput(props) {
  const [input, setInput] = useState("");

  function ChangeHandlerInput(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <p>{input}</p>
      <input type="text" placeholder={props.placeholder || "write in here!"} onChange={ChangeHandlerInput} />
    </div>
  )
}

export default AutoInput
import React, { useState } from "react"

function AutoInput(props) {
  const [input, setInput] = useState("");

  function ChangeHandlerInput(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <input type="text" placeholder={props.placeholder || "write in here!"} onChange={ChangeHandlerInput} />
      <br/>
      {input}
    </div>
  )
}

export default AutoInput
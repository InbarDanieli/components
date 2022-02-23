import React, { useRef, useState } from "react"

function AutoInput(props) {
  const [input, setInput] = useState("");
  const Input = useRef(null)

  function ChangeHandlerInput(e) {
    setInput(e.target.value);
  }
function ClickeHandler(){
  Input.current.focus()
}

  return (
    <div>
      <input ref={Input} type="text" placeholder={props.placeholder} onChange={ChangeHandlerInput} />
      <button onClick={ClickeHandler}>Add Input</button>
      <br/>
      {input}
    </div>
  )
}


AutoInput.defaultProps = {
  placeholder: "write in here!"
}

export default AutoInput
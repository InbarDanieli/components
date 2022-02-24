import React, { useState } from 'react'
import "./SideBar.css"

function SideBarRTL() {
  const [open, setOpen] = useState(false)
  const [classN, setClassN] = useState("open-sideB close")
  // const [propagation, setPropagation] = useState(false)


  function changing() {
    open ? setClassN("open-sideB close") : setClassN("open-sideB")
    setOpen(!open)
  }
  function wrapperHandler() {
    if (open) {
      changing()
    }
  }
  function enterHandler(e) {
    if (e.key === "Escape") {
      wrapperHandler()
    }
  }


  return (
    <div className='wrapper' onKeyDown={enterHandler} onClick={wrapperHandler}>
      <button className="button" onClick={(e)=>{changing(); e.target.blur()}}>☰</button>
      <div onClick={(e)=>e.stopPropagation()} className={classN}>
        <a href="#">one</a>
        <a href="#">two</a>
        <a href="#">three</a>
      </div>
    </div>
  )
}

export default SideBarRTL
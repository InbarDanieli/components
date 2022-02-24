import React from 'react'
import "./ToolTip.css"

function ToolTip() {
  return (
    <div className='wrapper'>
      <div className="tooltip">help
        <span className="tooltiptext"><b style={{ marginLeft: "25px" }}>to select multiple items:</b><hr /> <ol><li>ctrl + select items</li><li>left click on the mouse + drag on the items</li></ol></span>
      </div>
    </div>
  )
}

export default ToolTip

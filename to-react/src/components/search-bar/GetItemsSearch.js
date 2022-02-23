import React, { useEffect, useState } from 'react'

function GetItemsSearch(props) {
  const [items, setItems] = useState(props.items)
  useEffect(() => {
    setItems(props.items.filter((item) => item.toUpperCase()
      .includes(props.search.toUpperCase())))
  }, [props.search, items, props.items])

  return (
    <div>
      {items.length
        ? items.map((item) => <p>{item}</p>)
        : <p>we couldnt find what your looking for :/</p>}
    </div>
  )
}

export default GetItemsSearch
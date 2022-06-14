import React from "react"
import {Item} from "./Item"

export function GroupItem ({Lista}) {
  return (
    <div>
        {Lista.map((x) => (<Item dataText={x}/>))}
    </div>
  )
}


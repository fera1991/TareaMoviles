import React from "react"
import {Item} from "./Item"

export function GroupItem ({ListaData,removeHandler}) {
  console.log(ListaData)
  return (
    <div>
        {ListaData.map((data) =>(<Item todo={data} removeHandler={removeHandler}/>))}
    </div>
  )
}


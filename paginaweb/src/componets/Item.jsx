import React from "react";

export function Item({todo,removeHandler}) {
  const { id,data} = todo;
 
  return (
    <li className="item">
      <button className="item-button" onClick={()=>removeHandler(id)}>x</button>
      {data}
    </li>
  );
}
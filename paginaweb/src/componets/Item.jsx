import React from 'react'

export function Item(dataText) {
    const {id,data} = dataText;

  return (<li>{data}</li>)
}

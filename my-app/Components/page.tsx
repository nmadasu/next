'use client'
import React from 'react'
import menusItem from "./menu/page"

function HeaderData(props:any) {
  return (
    <div>
        {/* this is the header component */}
        {props.name}
        {/* <menusItem {...props}/> */}
    </div>
  )
}

export default HeaderData

'use client'

import Link from 'next/link'
import {useState} from 'react'


export function Header() {
  let [menuStatus, setMenuStatus] = useState(false)
    
  function clickHandler() {
  setMenuStatus(!menuStatus)
  console.log(menuStatus)
    }

  return (
        <header>
      <h1>🔥Fireplace Palace</h1>

      <button onClick={clickHandler}>button</button>
    </header>
    )
}

//menuStatus ? display menu : don't display menu
// x : lines
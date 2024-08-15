'use client'

import Link from 'next/link'
import {useState} from 'react'


export function Header() {
  let [menuStatus, setMenuStatus] = useState(false)
    
  function clickHandler() {
  setMenuStatus(!menuStatus)
  console.log(menuStatus)
    }

    // function menuOpen( {
    //   {menuStatus ?  }
    // })

  return (
        <header>
      <h1>🔥Fireplace Palace</h1>

      <button onClick={clickHandler}>{menuStatus ? <img src='../images/menu-open-button.png'></img> : <img src='../images/menu-close-button.png'></img>} </button>
      {menuStatus && (
      <div className="Menu">
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/founders">Meet the Founders</Link></li>
        </ul>
      </nav>
      </div>
    )}
    </header>
    )
}

//menuStatus ? display menu : don't display menu

//when menus open: changes button and div opens; has 2 links 
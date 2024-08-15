"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  let [menuStatus, setMenuStatus] = useState(false);

  function clickHandler() {
    setMenuStatus(!menuStatus);
    console.log(menuStatus);
  }

  // function menuOpen( {
  //   {menuStatus ?  }
  // })

  return (
    <header>
      <h1>🔥Fireplace Palace</h1>

      <button onClick={clickHandler}>
        {menuStatus ? (
          <img
            src="../images/menu-close-button.png"
            className="menuButtonImg"
          ></img>
        ) : (
          <img
            src="../images/menu-open-button.png"
            className="menuButtonImg"
          ></img>
        )}
      </button>
      <div className="menuFlexBox">
        {menuStatus && (
          <div className="Menu">
            <nav>
              <Link href="/">Home</Link>
              <br></br>
              <Link href="/founders">Meet the Founders</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

//menuStatus ? display menu : don't display menu

//when menus open: changes button and div opens; has 2 links

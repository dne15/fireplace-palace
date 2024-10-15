"use client";
import Image from 'next/image';


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
      <button onClick={clickHandler} className="menuButton">
        {menuStatus ? (
          <Image
            src="/images/menu-close-button.png"
            className="menuButtonImg"
            alt="menu close button"
            width={100}
            height={100}
          />
        ) : (
          <Image
            src="/images/menu-open-button.png"
            className="menuButtonImg"
            alt="menu open button"
            width={100}
            height={100}
          />
        )}
      </button>

      {menuStatus && (
        <div className={`menuFlexBox`}>
          <div className="Menu">
            <nav>
              <Link className="homeLink" href="/" onClick={clickHandler}>
                Home
              </Link>
              <br></br>
              <Link href="/Founders" onClick={clickHandler}>
                Meet the Founders
              </Link>
              <br></br>
              <Link href="/Contact" onClick={clickHandler}>
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

// menuStatus ? display menu :
// don't display menu

// when menus open: changes button
// and div opens; has 2 links

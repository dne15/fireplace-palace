'use client'

import Link from 'next/link'
export function Page() {
}

export function Header() {
    function clickHandler() {
      <Link href="/Founders">Dashboard</Link>
    }
  return (
        <header>
      <h1>🔥Fireplace Palace</h1>
      <Link href="/Founders">Dashboard</Link>
    </header>
    )
}
import React from 'react'
import Link from 'next/link'

export default function Page() {
  return (
    <>
       <h1>Home page</h1>
       <Link href="/about">link to about page</Link>
    </>
  )
}

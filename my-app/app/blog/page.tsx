import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>
      <div>
        <Link href='/'>
          <h1>Home</h1>
        </Link>
      </div>
      <h2>Welcome to the Blog</h2>
    </div>
  )
}

export default page

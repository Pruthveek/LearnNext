import Link from 'next/link'
import React from 'react'

export default function () {
  return (
    <div className=' flex pt-1 pl-1 fixed z-100'>
        <Link href="/products">
            <p>🗄️</p>
        </Link>
    </div>
  )
}

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
function Footer() {
  return (
    <footer className="border-t">
        <div className="flex-center wrapper flex flex-col gap-4 p-5 text-center sm:flex-row ">
        <Link href="/">
        <Image src="/assets/images/logo.svg" alt="logo" height={38} width={128}/>
        </Link>
<p>2024 Evently .All Rights Reserved</p>
</div>
    </footer>
  )
}

export default Footer
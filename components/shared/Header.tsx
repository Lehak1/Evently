import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
const Header = () => {
  return (
    <header className="w-full border-b min-h-screen">
        <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex items-center justify-between  ">
        <Link href="/"><Image src="/assets/images/logo.svg" width={128} alt="logo" height={36}/></Link>




<SignedIn>
<nav className="hidden md:flex md:justify-between">

  <NavItems/>

</nav>
</SignedIn>


        <div className="flex justify-end gap-3">       
        <SignedOut>      
        <Button className="">
          <Link href="/sign-in">   
Login
</Link>
</Button>
</SignedOut>

 <SignedIn>
<UserButton afterSignOutUrl="/"/>
<MobileNav/>
</SignedIn> 

        </div>
        </div>
        </header>
  )
}

export default Header



import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"
const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex items-center justify-between">
        <Link href="/"><Image src="/assets/images/logo.svg" width={128} alt="logo" height={36}/></Link>



        
        <div className="flex justify-end gap-3">
<Button className="">Login</Button>
        </div>
        </div>
        </header>
  )
}

export default Header
//
import {
  Sheet,
  SheetContent,
 
  SheetTrigger,
} from "@/components/ui/sheet"

import Image from "next/image"
import NavItems from "./NavItems"
const MobileNav = () => {
  return (
    
    <div className="md:hidden"> 
    <Sheet>
<SheetTrigger>
  <Image src="/assets/icons/menu.svg" alt="menu" width={25} height={25}/>
</SheetTrigger>


   <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
<Image src="/assets/images/logo.svg" alt="logo" width={128} height={38}/>
<NavItems/>







   </SheetContent>






    </Sheet>
    </div>
    
  )
}

export default MobileNav
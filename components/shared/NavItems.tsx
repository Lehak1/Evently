import {headerLinks} from '@/constants'
import Link from 'next/link'
import React from 'react'
const NavItems = () => {
  return (
    <ul className="md:flex-row md:justify-between w-full items-start gap-5 flex flex-col">
      {headerLinks.map((Linkitem)   =>{
        return (
        <li
        key={Linkitem.route}
        >
           <Link href={Linkitem.route}>{Linkitem.label}</Link>
        </li>
        )
      }                                                                                                                                                                                                                                                                                                                                                                    )}
        
      </ul>



   
  )
}

export default NavItems
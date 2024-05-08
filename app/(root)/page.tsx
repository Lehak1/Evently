import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Home(){
    return (
<>
<section className="bg-primary-50 bg-contain py-5 md:py-10" >
<div className=" wrapper grid grid-cols-1 gap-20 md:grid-cols-2">
<div className="flex flex-col justify-center gap-8">

<h1 className="h1-bold">Host,Connect,Celebrate :Your Events,Our Platform !</h1>
<p className="p-regular-24">Book and learn helpful tips from 3,468 + mentors in world-class companies with our global community</p>
<Button size="lg" asChild className="button w-full sm:w-fit" ><Link href="#events">Explore Now</Link></Button>
</div>
<Image src="/assets/images/hero.png" alt="hero" height={400} width={400}/>
</div>
</section>




</>


    )
}
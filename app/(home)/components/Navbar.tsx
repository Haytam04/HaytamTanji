import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";


function Navbar({className}:{className?:string}) {

  const socials = [
    
    {
      label: "linkedin",
      link: "https://www.linkedin.com/in/haytamtanji/",
      Icon: SiLinkedin,
    },

    {
      label: "github",
      link: "https://github.com/Haytam04",
      Icon: SiGithub,
    },
    {
      label: "youtube",
      link: "https://www.youtube.com/@itsme.tomioka/featured",
      Icon: SiYoutube,
    },

    {
      label: "instagram",
      link: "https://www.instagram.com/itsme.tomioka/",
      Icon: SiInstagram,
    },

  ]


  return (
    <nav className={cn("py-12 flex justify-between items-center animate-move-down",className)}>
        <h1 className='text-3xl font-bold underline underline-offset-8 decoration-green-700 
        -rotate-2 cursor-pointer'>
          Haytam 🧑🏻‍💻
        </h1>

        <div className='flex items-center gap-5'>
          {socials.map((social,index) => {

            const Icon = social.Icon

            return ( 
            <Link 
            href={social.link}
            key={index} 
            aria-label={social.label} >

              <Icon className='size-5 hover:scale-125 transition-all' />
  
            </Link>
          );

          })}

        </div>

    </nav>
  )
}

export default Navbar
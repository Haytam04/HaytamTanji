import React from 'react'
import Link from 'next/link'
import Title from './Title'

function Hero() {
  return (
    <div className='min-h-[74vh] py-3 flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center
     justify-between animate-move-up'>
        <div className='space-y-10 text-center lg:text-left'>

            <h1 className='text-4xl lg:text-7xl font-bold '>Nice to meet you! 👋<br/> <span className='underline underline-offset-8 decoration-green-500'> 
            I'm Haytam.</span> 
            </h1>

        <p className='md:w-80 text-lg text-gray-300'>
        I'm Haytam Tanji, a web developer passionate about building 
        a modern web application that users love.
        </p>

        <Link href={"mailto:haytam.tanji123@gmail.com"} className='inline-block group'>
            
            <Title text="Contact Me 📬"></Title>

        </Link>

        </div>

        <div>

            <div className="size-74 space-y-3 -rotate-[30deg] relative">

                <div className="flex gap-3 translate-x-8">
                    <div className="size-32 rounded-2xl bg-green-500"></div>
                    <div className="size-32 rounded-full bg-indigo-500"></div>
                </div>

                <div className="flex gap-3 -translate-x-8">
                    <div className="size-32 rounded-2xl bg-indigo-500"></div>
                    <div className="size-32 rounded-full bg-green-500"></div>
                </div>

                <div className="flash absolute top-[40%] right-1/2 -z-10"></div>

            </div>

        </div>


    </div>
  )
}

export default Hero
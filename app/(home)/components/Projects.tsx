import { title } from 'process'
import React from 'react'
import Title from './Title'
import { SiHeadlessui, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

function Projects() {

    const projects = [
        {
            title:'Portfolio',
            tech: [SiNextdotjs, SiReact, SiTailwindcss, SiTypescript,],
            link: "https://haytamtanji.vercel.app/",
            cover: '/project1.png',
            background: 'bg-indigo-500'
        },
        {
            title:'CarHub',
            tech: [SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiHeadlessui],
            link: "https://cars-rent-app-six.vercel.app/",
            cover: '/project2.png',
            background: 'bg-green-500'
        },
        {
            title:'MeetUpNow',
            tech: [SiNextdotjs, SiReact, SiTailwindcss, SiTypescript],
            link: "https://meetupnow1.vercel.app/",
            cover: '/MeetUpNow.png',
            background: 'bg-green-500'
        },
        {
            title:'Portfolio',
            tech: [SiNextdotjs, SiReact, SiTailwindcss, SiTypescript,],
            link: "https://haytamtanji.vercel.app/",
            cover: '/project1.png',
            background: 'bg-indigo-500'
        },
    ]


  return (
    <div className='py-10 p-5 sm:p-0'>
        <Title text='Projects 🎨' 
        className='flex items-center justify-center flex-col rotate-3'/>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 pt-20">
            
            {projects.map((project,index) => {
                return <Link key={index} href={project.link}>

                    <div className={cn("p-5 rounded-md",project.background)}>

                    <DirectionAwareHover imageUrl={project.cover}
                    className='w-full space-y-5 cursor-pointer'>
                        <div className='space-y-5 '>

                        <h1 className='text-2xl font-semibold'>{project.title}</h1>

                        <div className="flex items-center gap-5">

                            {project.tech.map((Icon,index) => {
                                return <Icon 
                                        key={index}
                                        className='size-8'
                                        />;
                            })}

                        </div>
                        </div>

                    </DirectionAwareHover>

                    </div>

                </Link>;
            })}
        </div>

    </div>
  )
}

export default Projects
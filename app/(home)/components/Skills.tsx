"use client"
import React from 'react'
import Title from './Title'
import { CardHoverEffect } from '@/components/ui/CardHoverEffect'
import { TbBrandMysql } from "react-icons/tb";
import { SiGit, SiJavascript, SiMongodb , SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript, SiSpringboot, SiAngular, SiMongoose, SiKubernetes, SiWordpress } from 'react-icons/si'

function Skills() {

  const skills = [
    {
      text: "React",
      icon: SiReact,
    },
    {
      text: "Next.js",
      icon: SiNextdotjs,
    },
    {
      text: "JavaScript",
      icon: SiJavascript,
    },
    {
      text: "MySQL",
      icon: TbBrandMysql,
    },
    {
      text: "TypeScript",
      icon: SiTypescript,
    },
    {
      text: "Git",
      icon: SiGit,
    },
    {
      text: "Tailwind",
      icon: SiTailwindcss,
    },
    {
      text: "MongoDB",
      icon: SiMongodb,
    },
    {
      text: "Node.js",
      icon: SiNodedotjs,
    },
    {
      text: "Springboot",
      icon: SiSpringboot,
    },
    {
      text: "Angular",
      icon: SiAngular,
    },
    {
      text: "Wordpress",
      icon: SiWordpress,
    },
  ]

  

  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title text='Skills 🎯' className='flex items-center justify-center flex-col -rotate-3'></Title>
      <CardHoverEffect items={skills}></CardHoverEffect>
    </div>
  )
}

export default Skills
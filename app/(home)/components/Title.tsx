import React from 'react'


function Title({text, className}:{text:string, className?:string}) {
  return (
    
        <div className={className}>
                <h1 className='cursor-pointer text-3xl font-bold hover:text-green-300 transition-all'>{text}</h1>

                <div className='w-40 h-2 bg-green-500 rounded-full'/>               
                <div className='w-40 h-2 bg-indigo-500 rounded-full translate-x-2'/>
                               
            </div>
    
  )
}

export default Title
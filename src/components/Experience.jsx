import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import graphql from '../assets/graphql.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'


const Experience = () => {

  const techs = [
    {
      id: 1,
      src:html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src:css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src:javascript,
      title: 'JAVASCRIPT',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src:react,
      title: 'REACT',
      style: 'shadow-blue-500'
    },
    {
      id: 5,
      src:tailwind,
      title: 'TAILWIND',
      style: 'shadow-sky-500'
    },
    {
      id: 9,
      src:node,
      title: 'NodeJS',
      style: 'shadow-green-500'
    },
    {
      id: 6,
      src: nextjs,
      title: 'NEXTJS',
      style: 'shadow-gray-300'
    },
    {
      id: 7,
      src:graphql,
      title: 'GRAPHQL',
      style: 'shadow-pink-500'
    },
    {
      id: 8,
      src:github,
      title: 'GitHub',
      style: 'shadow-gray-500'
    },
  ]
  return (
    <div name='experience' className=' bg-gradient-to-b from-gray-800 to-black w-full h-screen sm:py-7'>

      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white sm:py-7'>

        <div>
          <p className='text-4xl font-bold border-b-4 inline border-gray-500  '>Experience</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>

          {
            techs.map(({id,src,title,style}) =>(
            <div key={id} 
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
            <img src={src} alt="" className='w-20 mx-auto' />
            <p className='mt-4'>{title}</p>
            </div>
            ))
          }

          </div>
        </div>
      </div>
  )
}

export default Experience

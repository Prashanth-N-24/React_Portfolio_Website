import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>   
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga nesciunt voluptatem quibusdam labore! Provident cupiditate quis sed asperiores atque recusandae ad molestias sapiente nam veritatis pariatur sequi nostrum rerum corrupti eaque placeat, doloremque illum, inventore incidunt. Repellendus veritatis, porro ullam totam alias earum minus id autem soluta optio hic tempore?</p>

        <br />
        <p className='text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus omnis iste sed cum at atque fugit! Modi ducimus, soluta nemo saepe dignissimos facere totam unde sit provident nisi fuga nam distinctio quis rerum illum suscipit impedit minima omnis ab amet explicabo rem! Nesciunt architecto deleniti dolorem nihil velit tenetur.
        </p>
      </div>
    </div>
  )
}

export default About

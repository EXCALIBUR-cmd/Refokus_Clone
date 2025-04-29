import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
function Card({width, start, para, hover="false"}) {
  return (
    <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff", padding:"25px"}} className={` bg-zinc-800 p-5 rounded-xl justify-between flex flex-col  ${width} min-h-[35rem]`}>
     <div>
     <div className='w-full flex justify-between items-center'>
        <h3>Get in Touch</h3>
        <FaArrowRight />
      </div>
      <h1 className='text-3xl font-medium mt-5'>Let's Get to it, together.</h1>
     </div>
     <div className='down w-full '>
        {
start && (
    <>  
    <h1 className='text-6xl font-bold tracking-tight leading-none'>Get Started</h1>
    <button className='rounded-full py-2 px-5 border-[1px] border-zinc-50'>Contact Us</button>
    </>
)
        }
        {para && (
            <p className='text-sm text-zinc-500 font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        )}

     </div>
    </motion.div>
  )
}

export default Card

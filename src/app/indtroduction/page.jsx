import React from 'react'
import { Button } from '@nextui-org/react'
export default function Introduction() {
  return (
    <div className="text-lg text-black bg-white flex flex-1 flex-col justify-around items-center w-full pb-10">

        <h1 className='text-center text-black text-5xl font-black leading-snug subpixel-antialiased pb-5'>
        Build your online presence, <br /> grow your business smarter with <br /> Propick
        </h1>
        <div className='flex flex-row gap-8 flex-wrap pb-5'>
        <Button>info@propick.in</Button>
        <Button>+91 8093088567</Button>
        </div>
        <p className='font-sans subpixel-antialiased'>A service agency based in india with customer satisfaction</p>
    </div>
  )
}

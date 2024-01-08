import React from 'react'
import Image from 'next/image'
import ServiceCard from '@/components/Servicecard/Servicecard'
import TestimonialsSlider from '@/components/TestimonialSlider/Testimonial'

const serviceList = [
    {
    id:1,
    heading:'Marketing & advertising',
    image: '/images/advertisig-agency.png',
    paragraph:'Propick is not exactly a promoting township in itself and in our little town of 35 workers we cover nearly everything that goes under the name of publicizing, marketing, planning, advanced promoting, web-based life the board, SEO and much more is on offer for you.'
    },
    {
        id:2,
        heading:'Design & Development',
        image:'/images/app-development.png',
        paragraph:'We start with analysis, research and planning followed by architecture, wireframing and content creation. Once completed we move on to design and SEO driven content including copywriting, photography and video.'
    },
    {
        id:1,
        heading:'Film & Media',
        image:'/images/film-slate.png',
        paragraph:`With a creative department that conceptualizes and thinks out of the case as well as far from it, our art department ventures away with them also to appear their vision. For us, it's not simply one more promotion that we'll be making, it's a relationship that we work with each item that enters our office.`
    }
]

export default function Services() {
  return (
    <div className='flex flex-1 flex-col justify-around items-center w-full bg-white text-black'>
        <h1 className='text-center text-5xl font-black leading-snug subpixel-antialiased pb-10'>
        Grow your Business with Propick</h1>
        <p className='text-center pb-10'>Propick is in the front line to a new era of media strategy and innovation.<br /> We create custom strategies for each of our clients <br />based on their need and goals. <br />Our team is made up of <br /> marketers, designers, developers and many more specialists and <br /> we know what it takes to get results online.</p>
        <div className='flex gap-2 flex-row'>
            {
               serviceList.map((item, i)=>{
                return(
                    <ServiceCard props={item} key={i}/>
                )
               })
            }
        </div>
      
    </div>
  )
}

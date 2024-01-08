import Image from 'next/image'

import Introduction from './indtroduction/page'
import Services from './services/page'
import TestimonialsSlider from '@/components/TestimonialSlider/Testimonial';
import Whyus from '@/components/Whyus/WhyUs';
import Clients from '@/components/Clients/Clients';
import OtherServices from '@/components/Otherservices/OtherServices';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <Introduction />
      <Services />
      <Whyus />
      <Clients />
      <OtherServices />
    </main>
  )
}

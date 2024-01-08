'use client'
import { useState, useEffect } from 'react';

const TestimonialsSlider = ({ testimonials }) => {
    console.log(testimonials)
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="flex flex-1 bg-gray-200 rounded-lg p-4">
      <div className=" flex flex-1 relative overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
              index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}
          >
            <div className="flex items-center space-x-4">
              <img src={testimonial.logo} alt="Company Logo" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p>{testimonial.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;

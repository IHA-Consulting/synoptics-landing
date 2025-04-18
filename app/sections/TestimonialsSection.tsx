"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'David R ',
      role: 'Head of Customer Experience ',
      image: '/images/testimonial1.jpg',
      text: 'Before Synoptix, we were overwhelmed with customer inquiries. Now, AI handles over 70% of them, cutting down wait times and improving satisfaction. It’s a game changer for us.',
    },
    {
      name: 'Samantha L ',
      role: 'IT Director',
      image: '/images/testimonial2.jpg',
      text: 'We were looking for a solution that would integrate smoothly with our existing tools and keep our data secure. Synoptix nailed it—they made automation work without compromising on security.',
    },
    {
      name: 'Mark T',
      role: 'Compliance Officer ',
      image: '/images/testimonial3.jpg',
      text: 'Compliance used to be a hassle. With Synoptix, we have automated key processes, reduced errors, and cut our processing time by almost 60%. It’s made life so much easier.',
    },
    {
      name: 'Jessica P ',
      role: 'VP of Marketing',
      image: '/images/testimonial4.jpg',
      text: 'AI felt like a huge leap at first, but Synoptix made it simple. Their AI agents are now part of our sales and marketing, and managing leads and customer interactions has never been smoother.',
    },
    {
      name: 'Dr. Andrew M ',
      role: 'NovaCare Medica',
      image: '/images/testimonial5.jpg',
      text: 'Data security is our priority, and Synoptix gave us that peace of mind. They helped us automate admin tasks, so our staff can focus on what truly matters—patient care.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 w-full">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-16">
          {/* Left side - Title and description */}
          <div className="w-full lg:max-w-xl text-center lg:text-left">
            <h3 className="text-blue-500 text-sm font-medium mb-4">TESTIMONIALS</h3>
            <h2 className="text-[40px] font-bold leading-tight mb-4">
            Success Speaks for Itself <br />
            Read What Our Clients Say
            </h2>
            {/* <p className="text-gray-600">
              Hear how industry leaders rely on Synoptix for accurate, secure, and business-ready insights.
            </p> */}
            <div className="flex gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right side - Testimonial cards */}
          <div className="w-full lg:flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
              <div
                key={index}
                className="rounded-[32px] p-8 bg-white border border-blue-100"
              >
                {/* Star rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Profile info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-gray-800 mb-6">{testimonial.text}</p>

                {/* LinkedIn link */}
                <a href="#" className="inline-flex items-center text-blue-500 font-medium">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  Linkedin
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 
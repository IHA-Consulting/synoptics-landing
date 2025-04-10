'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const CtaBanner = () => {
  return (
    <section className="py-16 bg-[#e9fcff] border-t border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Text content */}
          <div className="text-left w-full md:w-1/2">
          <h2 className="text-sm font-medium uppercase mb-4">SynoGuard</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Secure and Built for Enterprise 
            </h2>
            
            <p className="text-gray-600 text-lg mb-6">
            Protect AI interactions with SynoGuard—prevent harmful content, secure sensitive data, and block unauthorized access for complete control. 
            </p>
            
            {/* <div className="flex flex-wrap mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">Expert Guidance</span>
                <span className="text-gray-400 hidden md:inline">|</span>
                <span className="text-gray-700 font-medium">Tailored Advice</span>
                <span className="text-gray-400 hidden md:inline">|</span>
                <span className="text-gray-700 font-medium">Real Impact</span>
              </div>
            </div> */}
            
            {/* <p className="text-gray-500 text-sm mb-6">
              Limited Spots Available. Reserve Yours Now!
            </p> */}
            
            <Link
              href="/syno-guard"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#00A3FF] rounded-lg hover:bg-[#0096eb] transition-colors duration-200 shadow-sm"
            >
              Discover Enterprise AI Security 
            </Link>
          </div>
          
          {/* Right side - Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="AI Strategy Session"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;

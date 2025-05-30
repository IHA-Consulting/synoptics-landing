'use client';

import Image from 'next/image';

const IntroSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-square w-full max-w-lg mx-auto lg:max-w-none">
            <Image
              src="/images/New/Services - AI Consulting.png"
              alt="AI Technology Visualisation"
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-2xl"
              unoptimized
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Work Smarter with Synoptix AI Consulting
            </h2>

            <p className="text-gray-600 text-lg">
            Struggling with inefficiencies, manual processes, and disconnected data? Synoptix AI consulting services help you integrate AI strategically—eliminating roadblocks, automating workflows, and enabling smarter decisions.
            </p>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>AI solutions built for your business, not off-the-shelf tools</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Expert AI consulting to ensure seamless integration and meaningful results</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Secure, scalable strategies that grow with you</span>
              </li>
            </ul>

            <div className="space-y-4">
              <p className="text-gray-600">
              Synoptix AI consulting helps you adopt AI the right way—and make AI work for you. AI shouldn’t be complicated. It should be a strategic advantage. Let’s make it work for your business.
              </p>
              <p className="text-gray-600 font-medium">
                Let's make it work for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

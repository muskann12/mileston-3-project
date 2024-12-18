'use client'
import dynamic from 'next/dynamic';


// Dynamically import Framer Motion so it only runs on the client side
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

const Page = () => {
  return (
    <div className="bg-gradient-to-r from-[#042421] via-[#074740] to-[#00534a] min-h-screen">
      
      {/* First Section - Image on Left, Content on Right */}
      <MotionDiv 
        className="flex flex-col md:flex-row items-center justify-center py-16 px-8"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        {/* Left - Image */}
        <MotionDiv 
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ x: -200, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <img 
            src="/images/about.png" 
            alt="About Us" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </MotionDiv>

        {/* Right - About Us Content */}
        <MotionDiv 
          className="w-full md:w-1/2 pl-0 md:pl-8"
          initial={{ x: 200, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#e7fffd] mb-4">About Us</h2>
          <p className="text-lg text-white leading-relaxed mb-4">
          e are a passionate and dedicated company focused on delivering top-tier products and services that make a meaningful difference in the lives of our customers. With a deep commitment to quality, innovation, and customer satisfaction, we strive to create lasting value through everything we do. Our team is driven by a shared mission to exceed expectations.
          </p>
        </MotionDiv>
      </MotionDiv>

      {/* Second Section - Image on Right, Content on Left */}
      <MotionDiv 
        className="flex flex-col md:flex-row-reverse items-center justify-center py-16 px-8"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        {/* Right - Image */}
        <MotionDiv 
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ x: 200, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <img 
            src="/images/about22.png" 
            alt="Our Mission" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </MotionDiv>

        {/* Left - Mission Content */}
        <MotionDiv 
          className="w-full md:w-1/2 pr-0 md:pr-8"
          initial={{ x: -200, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#e7fffd] mb-4">Our Mission</h2>
          <p className="text-lg text-white leading-relaxed mb-4">
          Our mission is to enhance the lives of our customers by providing innovative, high-quality products and services that go beyond their expectations. We are committed to continuous improvement and always strive to deliver solutions that meet the evolving needs of our customers. Our goal is to build long-term relationships with our customers and exceed their expectations in everything we do, ensuring their satisfaction and trust.
          </p>
        </MotionDiv>
      </MotionDiv>

      {/* Third Section - Image on Left, Content on Right */}
      <MotionDiv 
        className="flex flex-col md:flex-row items-center justify-center py-16 px-8"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        {/* Left - Image */}
        <MotionDiv 
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ x: -200, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <img 
            src="/images/about2.png" 
            alt="Our Values" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </MotionDiv>

        {/* Right - Values Content */}
        <MotionDiv 
          className="w-full md:w-1/2 pl-0 md:pl-8"
          initial={{ x: 200, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#e7fffd] mb-4">Our Core Values</h2>
          <ul className="text-lg text-white leading-relaxed mb-4 list-disc pl-6">
            <li>Customer Focus: We listen and respond to our customers' needs.</li>
            <li>Integrity: We act with honesty and transparency in everything we do.</li>
            <li>Innovation: We embrace change and continuously improve.</li>
            <li>Quality: We deliver products and services that exceed expectations.</li>
          </ul>
        </MotionDiv>
      </MotionDiv>

      {/* Contact Us Section */}
      <MotionDiv 
        className="bg-gradient-to-r from-[#042421] via-[#074740] to-[#00534a] py-16 px-8"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl font-extrabold text-[#e7fffd] mb-6">Contact Us</h3>
        <p className="text-lg text-white leading-relaxed mb-4">
          Have questions or want to get in touch? We're here to help! Reach out, and we'll get back to you as soon as possible.
        </p>

        <form className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg text-[#074740] font-semibold">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-[#074740] font-semibold">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg text-[#074740] font-semibold">Message</label>
            <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg"></textarea>
          </div>
          <button type="submit" className="bg-[#00534a] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#074740] w-full">
            Submit
          </button>
        </form>
      </MotionDiv>
    </div>
  );
};

export default Page;

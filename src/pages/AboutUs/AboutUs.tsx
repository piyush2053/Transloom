import React from 'react';
import { AiOutlineRobot } from 'react-icons/ai';
import '../../index.css';

const AboutUs = () => {
  return (
    <div className="fade-in text-white px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-transparent text-[#fff] text-xs font-semibold px-5 py-1 rounded-full flex border border-white">
            <AiOutlineRobot className="text-[#fff] text-1xl mr-1 mt-0.5" />
            Learn about us and what we're up to
          </span>
        </div>
        <h1 className="text-7xl font-bold mb-6">
          About Us
        </h1>
        <div className="flex items-center justify-center mb-8 px-2">
          <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400 px-10">
            Welcome to Transloom, where language knows no boundaries. With a commitment to bridging the gap between cultures and facilitating global communication, we offer professional translation services in over 152 languages.
            Our team of skilled linguists, translators, and localization experts ensures that your message resonates seamlessly across linguistic borders, preserving its essence and integrity. Whether it's website content, legal documents, marketing materials, or technical manuals, we deliver accurate, culturally sensitive translations tailored to your specific needs.
            At Transloom, we understand the importance of precision, timeliness, and confidentiality. That's why we employ rigorous quality assurance measures and adhere to strict deadlines, guaranteeing excellence every step of the way.
            Join countless satisfied clients who have entrusted us with their translation needs. Let us help you break down language barriers and expand your global reach. Contact us today to discover how we can transform your words into a universal language of understanding.
          </p>
        </div>
        <div className="flex gap-2 justify-center">
            <h2 className="text-2xl font-bold mt-2">Piyush Patel</h2>
            <img src='https://piyush2053.github.io/PortFolio/assets/images/me.jpeg' alt='piyush patel' className='rounded-full h-[50px] w-[50px]'></img>
          </div>
      </div>
    </div>
  );
}

export default AboutUs;
import React from 'react';
import '../../index.css';
import languages from './languages.ts'
import { Link } from 'react-router-dom';

const Home = () => {
  const getStarted = 'Get Started >'
  return (
    <div className='fade-in '>
      <div className="text-white pt-16 pb-5 px-4 md:px-0 flex justify-center" style={{color:"white"}}>
        <h1 className="text-7xl text-white font-bold">
          Transloom
        </h1>
      </div>
      <div className='flex justify-center'>
      <Link to='/translate' className='p-5 bg-white inverseColor text-3xl'>{getStarted}</Link>
      </div>
      <div className='flex justify-center'>
        <h1 className="text-4xl text-white font-bold mt-5 mb-5">
          Supported Languages
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-9xl px-4 md:px-6">
        {languages.map((language, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg text-white flex justify-center">
            {language}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

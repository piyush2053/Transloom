import React  from 'react';
import '../../index.css';
import languages from '../Translate/LanguagesDropdown.ts';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Typist from 'react-typist'; 
import Logo from './animation/fac.png'
import { useLanguage } from '../../LanguageProvider.tsx';

const Home = () => {
  const getStarted = 'Get Started >'
  const { updateSelectedLanguage } = useLanguage();
  const navigate = useNavigate();
  const selectLanguageFromHomepage = (language) => {
    updateSelectedLanguage(language);
    navigate('/translate')
  };
  return (
    <div className='fade-in '>
      <div className="text-white pb-5 px-4 md:px-0 flex justify-center" style={{color:"white"}}>
        <h1 className="text-7xl text-white font-bold">
          Transloom
        </h1>
        <img src={Logo} alt='Transloom' className='h-[50px] w-[50px] mt-7 ml-2'></img>
      </div>
      <div className="flex items-center justify-center px-2">
      <Typist avgTypingDelay={20} className="flex text-gray-500 md:text-xl/relaxed dark:text-gray-400 px-10 justify-center" startDelay={100}> Welcome to Transloom, where language knows no boundaries. With a commitment to bridging the gap between cultures and facilitating global communication, we offer professional translation services in over 152 languages.</Typist>
        </div>
      <div className='flex justify-center'>
      <Link to='/translate' className='p-5 font-semibold !bg-white inverseColor text-3xl animate-pulse'>{getStarted}</Link>
      </div>
      <div className='flex justify-center'>
        <h1 className="text-4xl text-white font-bold mt-5 mb-5">
          Supported Languages
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-9xl px-4 md:px-6 mb-10">
        {languages.map((language, index) => (
          <div key={index} onClick={(e)=>selectLanguageFromHomepage(language.value)} className="cursor-pointer cardsHome bg-[#141414d4] p-4 rounded-lg text-[#9E9E9E] text-[18px] flex justify-center">
            {language.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

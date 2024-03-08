import React  from 'react';
import '../../index.css';
import languages from '../Translate/LanguagesDropdown.ts';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Typist from 'react-typist'; 
import Logo from './animation/fac.png'
import { useLanguage } from '../../LanguageProvider.tsx';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const getStarted = 'Get Started >'
  const { updateSelectedLanguage } = useLanguage();
  const navigate = useNavigate();
  const selectLanguageFromHomepage = (language) => {
    updateSelectedLanguage(language);
    navigate('/translate')
  };
  return (
    <div className='fade-in mt-20'>
      <Helmet>
        <title>Transloom - Free Translations for 152 Languages</title>
        <meta name="description" content="Get free translations for 152 languages. Translate your content easily with our translation tool." />
        <meta name="keywords" content="translations, free translations, language translation, translate, 152 languages, localization, multilingual, translation services, professional translation, online translation, global communication, linguistics, interpretation, document translation, website translation, certified translation, machine translation, human translation, transcreation, internationalization, translation agency, language services, cultural adaptation, language learning, translation tools, transcription, subtitling, voice-over, terminology management, language proficiency, bilingualism, cross-cultural communication, language technology, language pairs, translation memory, CAT tools, legal translation, medical translation, technical translation, financial translation, literary translation, academic translation, marketing translation, website localization, software localization, game localization, globalization, international business, language industry, translation certification, translation quality, linguistic diversity, language barriers, language accessibility, interpretation services, conference interpretation, remote interpretation, simultaneous interpretation, consecutive interpretation, machine learning translation, natural language processing, neural machine translation, language processing, translation automation, language education, translation studies, linguistic anthropology, terminology standardization, language standards, language preservation, language revitalization, translation ethics, language rights, translation career, freelance translation, translation project management, translation workflow, translation industry trends, translation market analysis, language teaching methods, translation software, translation APIs, language assessment, translation pricing models, machine translation evaluation, translation and interpretation conferences, language policy, translation history, language evolution, translation criticism, cultural translation, language access, translation as a profession, language proficiency testing, language education technology, translation resources, language service providers, translation project outsourcing, translation industry regulations, localization best practices, translation case studies, translation feedback, global content strategy" />
      </Helmet>
      <div className="text-white pb-5 px-4 md:px-0 flex justify-center" style={{color:"white"}}>
        <h1 className="text-5xl md:text-7xl text-white font-bold">
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
      <h1 className="text-2xl md:text-4xl text-white font-bold mt-5 mb-5">
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

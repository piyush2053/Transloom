import React from 'react';
import '../../index.css';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div className="fade-in text-white px-4 md:px-0 mt-20">
            <Helmet>
                <title>Page Not Found</title>
                <meta name="description" content="Get free translations for 152 languages. Translate your content easily with our translation tool." />
                <meta name="keywords" content="translations, free translations, language translation, translate, 152 languages, localization, multilingual, translation services, professional translation, online translation, global communication, linguistics, interpretation, document translation, website translation, certified translation, machine translation, human translation, transcreation, internationalization, translation agency, language services, cultural adaptation, language learning, translation tools, transcription, subtitling, voice-over, terminology management, language proficiency, bilingualism, cross-cultural communication, language technology, language pairs, translation memory, CAT tools, legal translation, medical translation, technical translation, financial translation, literary translation, academic translation, marketing translation, website localization, software localization, game localization, globalization, international business, language industry, translation certification, translation quality, linguistic diversity, language barriers, language accessibility, interpretation services, conference interpretation, remote interpretation, simultaneous interpretation, consecutive interpretation, machine learning translation, natural language processing, neural machine translation, language processing, translation automation, language education, translation studies, linguistic anthropology, terminology standardization, language standards, language preservation, language revitalization, translation ethics, language rights, translation career, freelance translation, translation project management, translation workflow, translation industry trends, translation market analysis, language teaching methods, translation software, translation APIs, language assessment, translation pricing models, machine translation evaluation, translation and interpretation conferences, language policy, translation history, language evolution, translation criticism, cultural translation, language access, translation as a profession, language proficiency testing, language education technology, translation resources, language service providers, translation project outsourcing, translation industry regulations, localization best practices, translation case studies, translation feedback, global content strategy" />
            </Helmet>
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <h1 className="text-7xl font-bold mb-6">
                    Page Not Found
                </h1>
                <div className="flex items-center justify-center mb-8 px-2">
                    <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400 px-10">
                        Oops! It seems like you've landed on the wrong URL. Please navigate back to the  
                        <span className='relative mx-2'>
                            <span className="animate-ping absolute inline-flex rounded-full bg-[#FFEE58] opacity-100 h-3 w-3"></span>
                            <a href='/' className='cursor-pointer bg-[#E040FB] px-3 rounded-full text-white font-semibold'>Homepage</a>
                        </span>
                        for the information you're looking for, or feel free to contact us for further assistance.
                    </p>
                </div>
                <div className="flex gap-2 justify-center">
                    <div className='flex justify-start' style={{ flexDirection: 'column' }}>
                        <h2 className="text-2xl font-bold">Piyush Patel</h2>
                        <a href='https://piyush2053.github.io/PortFolio/' rel="noreferrer" target='_blank' className='text-[#BDBDBD] font-semibold bg-[#424242] px-2 rounded-full'>Contact</a>
                    </div>
                    <img src='https://piyush2053.github.io/PortFolio/assets/images/me.jpeg' alt='piyush patel' className='mt-1 rounded-full h-[50px] w-[50px]'></img>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;
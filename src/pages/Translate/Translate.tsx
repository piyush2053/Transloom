import React, { useRef, useState } from 'react';
import { FaClipboard, FaMagic } from "react-icons/fa";
import { MenuItem, Typography } from '@mui/material';
import Select from '@mui/material/Select';
import Lottie from 'react-lottie';
import animationData from './loader/loder.json';
import animationDataPopper from './loader/poppers.json';
import translateJson from './loader/translate.json';
import languages from './LanguagesDropdown.ts';
import Typist from 'react-typist';
import { useLanguage } from '../../LanguageProvider.tsx';

const Translate = () => {
  const inputRef = useRef(null);
  const [definitions, setDefinitions] = useState('');
  const [accuracy, setAccuracy] = useState(0)
  const [loading, setLoading] = useState(false);
  const [poppers, setPoppers] = useState(false);
  const languageFromHook = useLanguage()
  const [selectedLanguage, setSelectedLanguage] = useState(languageFromHook.selectedLanguage);
  const [SuccessPopup, setShowSuccessPopup] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    // @ts-ignore
    const inputValue = inputRef.current.value;

    fetch('https://google-translation-unlimited.p.rapidapi.com/translate', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'f44f0eb869msh9cfe82dc6116de7p1c6861jsne92874139af1',
        'X-RapidAPI-Host': 'google-translation-unlimited.p.rapidapi.com'
      },
      body: new URLSearchParams({
        texte: inputValue,
        to_lang: selectedLanguage
      })
    })
      .then(response => response.json())
      .then(data => {
        setPoppers(true);
        setLoading(false);
        let original_counter = data.meta.original_counter
        let translate_counter = data.meta.translate_counter
        setAccuracy(Math.floor((translate_counter / original_counter) * 100));
        setDefinitions(data.translation_data.translation);
        setSelectedLanguage('')
        setTimeout(() => {
          setPoppers(false);
        }, 3000);
      })
      .catch(error => {
        setPoppers(false);
        setSelectedLanguage('')
        setLoading(false);
        console.error('Error:', error);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleButtonClick();
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const popperOptions = {
    loop: false,
    autoplay: true,
    animationData: animationDataPopper,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const translateOption = {
    loop: true,
    autoplay: true,
    animationData: translateJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const selectedLanguageLabel = languages.find(lang => lang.value === selectedLanguage)?.label;

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(definitions)
      .then(() => {
        setShowSuccessPopup(true);
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        setShowSuccessPopup(false);
        console.error('Error copying text to clipboard:', error);
      });
  };
  const barStyle = {
    width: '150px',
    transition: 'width 0.5s ease',
    backgroundColor: accuracy <= 20 ? '#F44336' : // Red for accuracy 0-20
      accuracy <= 40 ? '#FFEB3B' : // Yellow for accuracy 21-40
        accuracy <= 60 ? '#FF9800' : // Orange for accuracy 41-60
          '#4CAF50',                    // Green for accuracy 61-100
  };


  return (
    <div className="fade-in text-white px-4 md:px-0 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center justify-center mb-4">
          <span className="bg-transparent text-[#fff] text-xs font-semibold px-5 py-1 rounded-full flex border border-white">
            Step inside the box where the magic of content Translations unfolds
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl text-white font-bold mb-5">
          Translations
        </h1>
        <Lottie
          options={translateOption}
          height={100}
          width={100}
        />
      </div>
      <div className={`flex mx-5 p-1 mt-10 rounded-xl bg-[#212121] shadow-black`}>
        <textarea
          ref={inputRef}
          className='flex-grow bg-transparent rounded p-7'
          placeholder='Enter Your Query'
          onKeyDown={handleKeyPress}
          spellCheck={false}
        />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mt-5">
        {selectedLanguage ? (
          loading ? (
            <Lottie
              options={defaultOptions}
              height={50}
              width={50}
            />
          ) : (
            <button className='fade in bg-[#141414] flex text-[#8c8c8c] text-[20px] font-semibold px-4 py-1 rounded-full border border-white transition-all duration-300 hover:bg-transparent hover:text-[#fff] hover:animate-pulse' onClick={handleButtonClick}>
              Translate to {selectedLanguageLabel} <FaMagic className='ml-2 mt-1' />
            </button>
          )
        ) : (
          <div>
            <Select
              value={selectedLanguage}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Language"
              placeholder='Select any Language'
              sx={{
                borderRadius: '50px', 
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#757575' 
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffffff' 
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ffffff' 
                }
              }}          
              className='w-[200px] bg-[#212121]'
              onChange={(e) => setSelectedLanguage(e.target.value)}
              MenuProps={{
                classes: {
                  paper: 'menu-paper'
                }
              }}
            >
              {languages.map((lang) => (
                <MenuItem key={lang.value} value={lang.value} className='menu-item'>{lang.label}</MenuItem>
              ))}
            </Select>
          </div>
        )}
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mt-2">
        {selectedLanguage ? <button onClick={() => setSelectedLanguage('')}>Change language</button> : null}
        {selectedLanguage ? null : <button>Select Any Language</button>}
      </div>
      <div className="fade-in max-w-7xl mx-auto mt-5 px-7" style={{ position: "relative" }}>
        <div className="poppers" style={{ position: 'absolute', top: 0, left: '12%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
          {poppers && <Lottie
            options={popperOptions}
            height={500}
            width={500}
          />}
        </div>
        <div className="poppers" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
          {poppers && <Lottie
            options={popperOptions}
            height={500}
            width={500}
          />}
        </div>
        <div className="poppers" style={{ position: 'absolute', top: 0, left: '88%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
          {poppers && <Lottie
            options={popperOptions}
            height={500}
            width={500}
          />}
        </div>
        <div className="poppers" style={{ position: 'absolute', top: 0, left: '30%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
          {poppers && <Lottie
            options={popperOptions}
            height={500}
            width={500}
          />}
        </div>
        <div className="poppers" style={{ position: 'absolute', top: 0, left: '70%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
          {poppers && <Lottie
            options={popperOptions}
            height={500}
            width={500}
          />}
        </div>
        {definitions && (
          <div className='mb-20'>
            <div>
              <div className='flex animate-bounce cursor-pointer  gap-2 px-5 bg-[#BDBDBD] w-[200px] rounded-lg mb-4' onClick={handleCopyToClipboard}>
                <FaClipboard className="text-black mt-1" />
                <button className='mb-1 text-black font-semibold'>Copy to Clipboard</button>
              </div>
              {SuccessPopup ? <button className="animate-bounce">Copied to Clipboard !</button> : null}
            </div>
            <Typography className='text-[#757575]' variant='h4'>
              <Typist startDelay={100} avgTypingDelay={30}>{'Translated Text'}{' '}</Typist>
            </Typography>
            <div className="progress mb-5">
              <div className="progress-bar px-5 rounded-full text-[#212121] font-semibold" role="progressbar" style={barStyle} aria-valuenow={accuracy} aria-valuemin="0" aria-valuemax="100">
                {accuracy}% Precision
              </div>
            </div>
            <Typography className='fade-in text-[#9E9E9E]'>
              <div className="definition-box">
                {definitions}
              </div>
            </Typography>

          </div>
        )}
      </div>
    </div>
  );
}

export default Translate;

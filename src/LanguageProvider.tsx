import React, { createContext, useState, useContext, ReactNode } from 'react';

type LanguageContextType = {
    selectedLanguage: string;
    updateSelectedLanguage: (language: string) => void;
};
const LanguageContext = createContext<LanguageContextType>({
    selectedLanguage: '',
    updateSelectedLanguage: () => { },
});

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const updateSelectedLanguage = (language: string) => {
        setSelectedLanguage(language);
    };

    return (
        <LanguageContext.Provider value={{ selectedLanguage, updateSelectedLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => useContext(LanguageContext);

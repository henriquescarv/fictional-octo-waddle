import React, { createContext, useState } from 'react';
import { LanguageEnum, LanguageStatus, LocaleContextProps, LocaleProviderProps } from './LocaleProvider.types';
import BRLocales from '../../locales/locales.br';
import ENLocales from '../../locales/locales.en';

const LocaleContextDefault = {
	language: 'en' as LanguageStatus,
	locale: BRLocales,
	setLanguage: (language: LanguageStatus) => language,
};

const content = {
	br: BRLocales,
	en: ENLocales,
};

const currentLanguage = window.navigator.language === 'pt-BR' ? 'pt-BR' : 'en-US';
export const LocaleContext = createContext<LocaleContextProps>(LocaleContextDefault);

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
	const [language, setLanguage] = useState<LanguageStatus>(LanguageEnum[currentLanguage]);

	const handleSetLanguage = (language: LanguageStatus) => {
		setLanguage(language);
	};

	const contextValue = {
		language: language as LanguageStatus,
		locale: content[language],
		setLanguage: handleSetLanguage,
	};

	return (
		<LocaleContext.Provider value={contextValue}>
			{children}
		</LocaleContext.Provider>
	);
};
import React, { createContext, useContext } from 'react';
import locales from '../../locales';
import { LocaleProviderProps } from './useLocale.types';

const defaultCountry = navigator.language === 'pt-BR' ? 'BR' : 'US';
const LocaleContext = createContext({});

const getAll = () => locales[defaultCountry];
const LocaleProvider = ({children}: LocaleProviderProps) => <LocaleContext.Provider value={{ ...getAll() }}>{children}</LocaleContext.Provider>;
const getLocale = () => useContext(LocaleContext);

export default {
	LocaleProvider,
	getLocale,
};

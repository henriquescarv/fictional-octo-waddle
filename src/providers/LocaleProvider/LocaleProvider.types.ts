import { ReactNode } from 'react';
import BRLocales from '../../locales/locales.br';

export type LanguageStatus = 'br' | 'en';

export type LocaleContextProps = {
  language: LanguageStatus;
  locale: typeof BRLocales;
	setLanguage: (language: LanguageStatus) => void;
};

export type LocaleProviderProps = {
  children: ReactNode;
};

export enum LanguageEnum {
	'en-US' = 'en',
	'pt-BR' = 'br',
}

import RNLanguageDetector from '@os-team/i18next-react-native-language-detector'
import * as dateFnsLocales from 'date-fns/locale'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, sk } from './translations'

export const languageLabels = {
	en: 'En',
	sk: 'Sk',
} as const

export const languages = Object.keys(
	languageLabels
) as (keyof typeof languageLabels)[]

interface Locales {
	[key: string]: Locale
}

export const getDateFnsLocale = (): Locale => {
	const locales: Locales = {
		en: dateFnsLocales.enGB,
		sk: dateFnsLocales.sk,
	}

	return locales[i18n.language]
}

i18n
	.use(RNLanguageDetector)
	.use(initReactI18next)
	.init({
		compatibilityJSON: 'v3',
		resources: {
			en,
			sk,
		},
		lng: 'en',
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n

import { useApiContext } from '@core/api'
import { useErrorContext } from '@core/error'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import WarningIcon from '../assets/warning.svg'
import styles from './ui-kit.styles'

export function UiKit() {
	const { t, i18n } = useTranslation('common')
	const currentLanguage = i18n.language
	const { bug } = useErrorContext()
	const { api } = useApiContext()

	const setLanguage = useCallback(() => {
		if (currentLanguage === 'en') {
			i18n.changeLanguage('sk')
			bug('Теперь язык SK', true)
		} else {
			i18n.changeLanguage('en')
			bug('Теперь язык EN')
		}
	}, [currentLanguage, i18n])

	console.log(setLanguage)

	async function fdf() {
		try {
			const res = await api('https://yourtestapi.com/api/posts/', {
				customUrl: true,
			})

			console.log('res', res)
		} catch (error) {
			console.log('error', error)

			bug(error)
		}
	}

	return (
		<View style={styles.screen}>
			<ScrollView>
				<View style={styles.container}>
					<WarningIcon width={80} height={80} fill="red" style={styles.icon} />
					<TouchableOpacity onPress={fdf}>
						<Text style={styles.title}>{`${t(
							'Hello'
						)} - ${currentLanguage}`}</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	)
}

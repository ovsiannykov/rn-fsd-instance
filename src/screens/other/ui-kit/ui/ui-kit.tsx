import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useApiContext } from '@shared/core/api'
import { useErrorContext } from '@shared/core/error'

import WarningIcon from '../assets/warning.svg'
import styles from './ui-kit.styles'

export function UiKit() {
	const { t, i18n } = useTranslation('common')
	const currentLanguage = i18n.language
	const { bug, success } = useErrorContext()
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

	async function requestExample() {
		try {
			const res = await api('https://jsonplaceholder.typicode.com/todos/1', {
				customUrl: true,
			})

			console.log('Todo: ', res)
			success('Todo successfully loaded!')
		} catch (error) {
			console.log('error', error)
			bug('Oops, Failed to get todo')
		}
	}

	return (
		<View style={styles.screen}>
			<ScrollView>
				<View style={styles.container}>
					<WarningIcon width={80} height={80} fill="red" style={styles.icon} />
					<TouchableOpacity onPress={setLanguage}>
						<Text style={styles.title}>{`${t(
							'Hello'
						)} - ${currentLanguage}`}</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={requestExample} style={styles.mt_10}>
						<Text style={styles.request_title}>Load todo</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	)
}

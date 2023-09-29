import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { useToastsContext } from '@shared/providers'
import WarningIcon from '../assets/warning.svg'
import styles from './ui-kit.styles'

export function UiKit() {
	const { t, i18n } = useTranslation('common')
	const currentLanguage = i18n.language
	const { success } = useToastsContext()

	const setLanguage = useCallback(() => {
		if (currentLanguage === 'en') {
			i18n.changeLanguage('sk')
			success('Теперь язык SK')
		} else {
			i18n.changeLanguage('en')
			success('Теперь язык EN')
		}
	}, [currentLanguage, i18n])

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
				</View>
			</ScrollView>
		</View>
	)
}

import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import WarningIcon from '../assets/warning.svg'
import styles from './ui-kit.styles'

export function UiKit() {
	return (
		<SafeAreaView style={styles.screen}>
			<WarningIcon width={80} height={80} fill="red" style={styles.icon} />
			<Text style={styles.title}>Hello World!</Text>
		</SafeAreaView>
	)
}

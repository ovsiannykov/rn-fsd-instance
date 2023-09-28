import React from 'react'
import { SafeAreaView, Text } from 'react-native'

export function UiKit() {
	return (
		<SafeAreaView
			style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
		>
			<Text
				style={{
					fontSize: 28,
					fontWeight: '600',
				}}
			>
				Hello World
			</Text>
		</SafeAreaView>
	)
}

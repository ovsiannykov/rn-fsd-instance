import React, { useCallback } from 'react'
import { KeyboardAvoidingView, View } from 'react-native'

import { IS_IOS } from '@shared/constants/device'
import { useToastsContext } from '@shared/core/index'
import { ToastMessage } from '@shared/ui'

import styles from './toaster.styles'

export function Toaster() {
	const { toasts } = useToastsContext()
	const keyboardVerticalOffset = IS_IOS ? 10 : 0

	const toastsContent = useCallback(() => {
		if (!toasts?.length) {
			return null
		}

		return toasts.map((el) => (
			<View key={el.id}>
				<ToastMessage title={el.content} variant={el.type} id={el.id} />
			</View>
		))
	}, [toasts])

	return (
		<View style={styles.screen} pointerEvents="box-none">
			<KeyboardAvoidingView
				keyboardVerticalOffset={keyboardVerticalOffset}
				behavior={IS_IOS ? 'position' : 'height'}
			>
				{toastsContent()}
			</KeyboardAvoidingView>
		</View>
	)
}

import { ReactNode, useEffect, useState } from 'react'
import { AppState } from 'react-native'

export const useWakeUp = (myFunc: () => ReactNode | Promise<void> | void) => {
	const [status, setStatus] = useState(AppState.currentState)

	useEffect(() => {
		const subscription = AppState.addEventListener('change', (nextAppState) => {
			if (status === 'background' && nextAppState === 'active') {
				myFunc()
				setStatus(nextAppState)
			}
			setStatus(nextAppState)
		})

		return () => subscription.remove()
	}, [myFunc, status])
}

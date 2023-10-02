import { ToastsProvider } from '@core/toasts'
import { MainNavigator } from '@navigation/main-navigator'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { Toaster } from '@features/toaster'

function App() {
	return (
		<ToastsProvider>
			<NavigationContainer>
				<MainNavigator />
				<Toaster />
			</NavigationContainer>
		</ToastsProvider>
	)
}

export default App

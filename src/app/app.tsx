import { ErrorProvider } from '@core/error/error.provider'
import { MainNavigator } from '@navigation/main-navigator'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { Toaster } from '@features/toaster'

function App() {
	return (
		<ErrorProvider>
			<NavigationContainer>
				<MainNavigator />
				<Toaster />
			</NavigationContainer>
		</ErrorProvider>
	)
}

export default App

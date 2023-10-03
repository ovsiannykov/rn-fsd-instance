import { ApiProvider } from '@core/api'
import { ErrorProvider } from '@core/error'
import { MainNavigator } from '@navigation/main-navigator'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { Toaster } from '@features/toaster'

function App() {
	return (
		<ErrorProvider error={null}>
			<ApiProvider>
				<NavigationContainer>
					<MainNavigator />
					<Toaster />
				</NavigationContainer>
			</ApiProvider>
		</ErrorProvider>
	)
}

export default App

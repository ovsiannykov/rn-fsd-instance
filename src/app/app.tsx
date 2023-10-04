import { MainNavigator } from '@navigation/main-navigator'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Toaster } from '@features/toaster'
import { ApiProvider } from '@shared/api'
import { ErrorProvider } from '@shared/error'

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

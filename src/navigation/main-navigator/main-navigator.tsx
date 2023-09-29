import { createStackNavigator } from '@react-navigation/stack'
import { UiKit } from '@screens/other'
import React from 'react'

const Main = createStackNavigator()

export function MainNavigator() {
	return (
		<Main.Navigator initialRouteName="MAIN.WELCOME_SCREEN">
			<Main.Screen name="MAIN.UI_KIT" component={UiKit} />
		</Main.Navigator>
	)
}

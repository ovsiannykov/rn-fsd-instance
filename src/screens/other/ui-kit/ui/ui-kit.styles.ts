import { StyleSheet } from 'react-native'

import { DEVICE_HEIGHT } from '@shared/constants/device'

export default StyleSheet.create({
	screen: {
		flex: 1,
	},
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: (DEVICE_HEIGHT / 100) * 75,
	},
	icon: {
		marginBottom: 10,
	},
	title: {
		fontSize: 32,
		fontWeight: '700',
	},
	mt_10: {
		marginTop: 10,
	},
	request_title: {
		fontSize: 18,
		fontWeight: '500',
	},
})

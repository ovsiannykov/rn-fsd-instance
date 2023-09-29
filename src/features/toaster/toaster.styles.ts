import { StyleSheet } from 'react-native'

import { IS_DYNAMIC_ISLAND, IS_NOTCH } from '@shared/constants/device'

export default StyleSheet.create({
	screen: {
		paddingTop: IS_NOTCH || IS_DYNAMIC_ISLAND ? 60 : 28,
		justifyContent: 'flex-start',
		paddingBottom: 40,
		position: 'absolute',
		height: '100%',
		paddingHorizontal: 16,
	},
})

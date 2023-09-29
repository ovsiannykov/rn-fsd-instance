import { StyleSheet } from 'react-native'

import { DEVICE_WIDTH } from '@shared/constants/device'

export default StyleSheet.create({
	container: {
		width: DEVICE_WIDTH - 32,
		minWidth: 32,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 12,
		paddingHorizontal: 20,
		marginBottom: 8,
		borderRadius: 8,
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.16,
		shadowRadius: 1.51,
		elevation: 2,
	},
	info_box: {
		flexDirection: 'row',
	},
	title: {
		maxWidth: '87%',
		fontSize: 16,
	},
	icon_box: {
		marginRight: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	positive: {
		backgroundColor: '#F0FBF3',
	},
	negative: {
		backgroundColor: '#FCEEEE',
	},
	warning: {
		backgroundColor: '#FFFAEB',
	},
	positive_text: {
		color: '#059739',
	},
	negative_text: {
		color: '#EE1C2E',
	},
	warning_text: {
		color: '#FF9900',
	},
})

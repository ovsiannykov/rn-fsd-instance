declare module '*.jpeg' {
	import { ImageSourcePropType, ImageURISource } from 'react-native/types'
	const content: string | ImageURISource | ImageSourcePropType
	export default content
}

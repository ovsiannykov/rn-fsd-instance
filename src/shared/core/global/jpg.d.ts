declare module '*.jpg' {
	import { ImageSourcePropType, ImageURISource } from 'react-native/types'
	const content: ImageURISource | ImageSourcePropType
	export default content
}

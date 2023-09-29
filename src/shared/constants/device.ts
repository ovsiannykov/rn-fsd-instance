import { Dimensions, Platform } from 'react-native'
import DeviceInfo, {
	getBrand,
	getModel,
	hasDynamicIsland,
	hasNotch,
	isCameraPresent,
} from 'react-native-device-info'

export const DEVICE_ID = DeviceInfo.getDeviceId()
export const DEVICE_ID_NO_CHARACTERS = DeviceInfo.getDeviceId().replace(
	/[^a-zA-Z0-9_]/g,
	''
)
export const DEVICE_WIDTH = Dimensions.get('window').width
export const DEVICE_HEIGHT = Dimensions.get('screen').height
export const SMALL_HEIGHT = DEVICE_HEIGHT < 650
export const VERY_SMALL_DEVICE = DEVICE_WIDTH < 360
export const SMALL_DEVICE = DEVICE_WIDTH < 375
export const MIDDLE_DEVICE = DEVICE_WIDTH >= 375 && DEVICE_WIDTH < 390
export const SMALL_DEVICES = MIDDLE_DEVICE || SMALL_DEVICE || VERY_SMALL_DEVICE
export const BIG_DEVICE = DEVICE_WIDTH >= 390
export const VERY_BIG_DEVICE = DEVICE_HEIGHT >= 2000
export const MAX_WIDTH_DEVICE = 428
export const IS_NOTCH = hasNotch()
export const DEVICE_MODEL = getModel()
export const IS_DYNAMIC_ISLAND = hasDynamicIsland()
export const IS_CAMERA_ON_DEVICE = isCameraPresent()
export const IS_IOS = Platform.OS === 'ios'
export const IS_ANDROID = Platform.OS === 'android'
export const DEVICE_BRAND = getBrand()

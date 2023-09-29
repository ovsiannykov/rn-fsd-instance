import {
	DEVICE_WIDTH,
	IS_DYNAMIC_ISLAND,
	IS_NOTCH,
	MAX_WIDTH_DEVICE,
} from '@shared/constants/device'

export const KEYBOARD_VERTICAL_OFFSET = IS_NOTCH || IS_DYNAMIC_ISLAND ? 50 : 20
export const HIT_SLOP_10 = { top: 10, bottom: 10, left: 10, right: 10 }
export const HIT_SLOP_15 = { top: 15, bottom: 15, left: 15, right: 15 }
export const HIT_SLOP_20 = { top: 20, bottom: 20, left: 20, right: 20 }
export const HIT_SLOP_25 = { top: 25, bottom: 25, left: 25, right: 25 }
export const HIT_SLOP_30 = { top: 30, bottom: 30, left: 30, right: 30 }

export function adaptiveSize(size: number): number {
	return Math.round((size * DEVICE_WIDTH) / MAX_WIDTH_DEVICE)
}

//  export const COLORS = {}

//export const FONTS = {}

/**
 * @format
 */

// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals'

import React from 'react'
import 'react-native'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

import App from '@app/app'

it('renders correctly', () => {
	renderer.create(<App />)
})

/**
 * @format
 */

import { AppRegistry } from 'react-native'
import 'react-native-gesture-handler'
import './src/core/i18n'

import App from '@app/app'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)

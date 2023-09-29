/**
 * @format
 */

import '@shared/i18n'
import { AppRegistry } from 'react-native'
import 'react-native-gesture-handler'

import App from '@app/app'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)

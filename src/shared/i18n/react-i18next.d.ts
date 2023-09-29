import 'react-i18next'

import { en as resources } from './translations'

declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS?: 'common'

		resources: typeof resources
	}
}

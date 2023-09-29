import axios from 'axios'

import { API_URL } from '@shared/env/api-urls'

export const instance = axios.create({
	baseURL: API_URL,
	headers: {
		accept: 'application/json',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		mode: 'no-cors',
	},
})

export const addTokenInHeaders = (token?: string) => {
	Object.assign(instance.defaults.headers, { Authorization: token || '' })
}

export const removeTokenInHeaders = () => {
	Object.assign(instance.defaults, {
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			mode: 'no-cors',
		},
	})
}

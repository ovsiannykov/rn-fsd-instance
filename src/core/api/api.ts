import type http from 'http'

import { API_URL } from '../env/env.const'

import {
	ApiError,
	PermissionError,
	ValidationError,
	isExtendedError,
	unknownToError,
} from '../error/error'
import type { Options, Response } from './api.types'
import { pause } from './helpers/pause'

export function isValid<T>(
	url: string,
	response: Response<T>
): Response<T> | never {
	if (response.code === 401) {
		throw new PermissionError(
			`Access denied [${response.code}] to ${url}`,
			response
		)
	}

	if (response.status !== 'ok') {
		throw new ValidationError(`${response.code} ${response.data}`, {
			code: response.code,
			data: response.data,
		})
	}

	return response
}

export default async function api<T>(
	url: string,
	options?: Options,
	headers?: http.OutgoingHttpHeaders
): Promise<[Response<T>, Headers]> | never {
	try {
		const apiUrl = options?.customUrl ? '' : API_URL
		const isNeedStringify =
			options?.body && options?.method !== 'GET'
				? { body: JSON.stringify(options.body) }
				: {}

		const requestOptions = Object.assign(
			{},
			{
				headers: {
					accept: 'application/json',
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					mode: 'no-cors',
					...headers,
				},
			},
			options,
			isNeedStringify
		)

		const request = fetch(`${apiUrl}${url}`, requestOptions)

		const result = await request

		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		let response: Response<T> = null!

		if (result.headers.get('content-type') === 'application/json') {
			response = await result.json()
		} else {
			throw new ValidationError('Json parsing error', {
				code: result.status,
				data: {
					url,
					method: options?.method,
				},
			})
		}

		return [isValid(url, response), result.headers]
	} catch (e) {
		if (isExtendedError(e)) {
			throw e
		}

		const error = unknownToError(e)
		throw new ApiError(error.message, {
			code: 500,
			stack: error.stack,
		})
	}
}

export async function retry<T>(
	retries: number,
	fn: () => Promise<T>,
	delay = 500,
	delayMultiply = 1
): Promise<T> {
	try {
		return await fn()
	} catch (e) {
		if (retries > 1) {
			await pause(delay)
			const result = await retry(retries - 1, fn, delay * delayMultiply)

			return result
		}
		throw e
	}
}

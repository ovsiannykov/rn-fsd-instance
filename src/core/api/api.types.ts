export interface Response<T> {
	status: 'ok' | 'error'
	code: number
	data: T
}

export interface Options {
	method: 'POST' | 'PUT' | 'GET' | 'DELETE' | 'PATCH'
	body?: string | number | object | FormData
	withoutToken?: boolean
	customUrl?: boolean
}

export interface IRequestResponse<T> {
	status: 'ok' | 'error'
	code: number
	data: T
}

export interface IRequestOptions {
	method?: 'POST' | 'PUT' | 'GET' | 'DELETE' | 'PATCH'
	body?: string | number | object | FormData
	withoutToken?: boolean
	customUrl?: boolean
}

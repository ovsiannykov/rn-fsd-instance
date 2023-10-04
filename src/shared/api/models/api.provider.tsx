import React, { useContext } from 'react'
import { ApiError } from '@shared/error'
import { getAuthTokenFromStorage } from '@shared/helpers/storage.helper'

import { IRequestOptions } from '../types/api.types'
import api from './api'

interface IApiContext {
	readonly api: InstanceType<typeof ApiProvider>['api']
}

interface IApiProps {
	readonly children: React.ReactNode
}

interface IApiState {
	readonly context: IApiContext
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const apiContext = React.createContext<IApiContext>(undefined!)

class ApiProvider extends React.Component<IApiProps, IApiState> {
	constructor(props: IApiProps) {
		super(props)
		this.state = {
			context: {
				api: this.api,
			},
		}
	}

	async api<T>(url: string, options?: IRequestOptions) {
		try {
			const tokenFromStorage = await getAuthTokenFromStorage()
			const token =
				options?.withoutToken || tokenFromStorage == null
					? null
					: tokenFromStorage
			const requestHeaders = Object.assign(
				{},
				token ? { Authorization: `Token ${token}` } : {}
			)

			const request = api<T>(url, options, requestHeaders)

			const [response] = await request

			return response
		} catch (e) {
			if (e instanceof Error) {
				throw e
			}
			throw new ApiError(typeof e === 'string' ? e : '')
		}
	}

	render() {
		return (
			<apiContext.Provider value={this.state.context}>
				{this.props.children}
			</apiContext.Provider>
		)
	}
}

const useApiContext = () => useContext(apiContext)
export { ApiProvider, apiContext, useApiContext }

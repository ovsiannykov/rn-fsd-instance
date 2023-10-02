import React, { useContext } from 'react'

import {
	ApiError,
	FatalError,
	PermissionError,
	unknownToError,
	ValidationError,
} from './error'

interface IErrorTransfer {
	name: string
	message: string
	stack?: string
	payload?: {
		code?: number
		data?: unknown
	}
}

interface IErrorContext {
	bug: InstanceType<typeof ErrorProvider>['bug']
	warning: InstanceType<typeof ErrorProvider>['success']
	success: InstanceType<typeof ErrorProvider>['success']
	fatal: InstanceType<typeof ErrorProvider>['fatal']
	error?: IErrorTransfer | null
	setError: InstanceType<typeof ErrorProvider>['setError']
	toasts: {
		id: number
		content: React.ReactNode
		type: 'error' | 'success' | 'warning'
	}[]
	remove: (id: number) => void
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const errorContext = React.createContext<IErrorContext>(undefined!)

type Props = {
	error: IErrorTransfer | null
	children: React.ReactNode
}

type State = {
	context: IErrorContext
}

export class ErrorProvider extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = {
			context: {
				bug: this.bug,
				warning: this.warning,
				success: this.success,
				fatal: this.fatal,
				error: props.error,
				setError: this.setError,
				remove: this.remove,
				toasts: [],
			},
		}
	}

	addToast = (
		content: React.ReactNode,
		toastType: 'error' | 'success' | 'warning'
	) => {
		const { toasts } = this.state.context
		const id = toasts.length > 0 ? toasts[toasts.length - 1].id + 1 : 1

		this.setState({
			context: {
				...this.state.context,
				toasts: [
					...this.state.context.toasts,
					{ id, content, type: toastType },
				],
			},
		})
	}

	remove = (id: number) => {
		this.setState({
			context: {
				...this.state.context,
				toasts: this.state.context.toasts.filter((toast) => toast.id !== id),
			},
		})
	}

	warning = (msg: string): void => {
		this.addToast(msg, 'warning')
	}

	bug = (rawError: unknown, asWarning?: boolean): void => {
		const error = unknownToError(rawError)

		asWarning
			? this.addToast(error.message, 'warning')
			: this.addToast(error.message, 'error')
	}

	success = (msg: string): void => {
		this.addToast(msg, 'success')
	}

	fatal = (rawError: unknown): void => {
		const error = unknownToError(rawError)
		this.setError(error)
	}

	setError = (
		error:
			| Error
			| PermissionError
			| ApiError
			| ValidationError
			| FatalError
			| null
	): void => {
		this.setState({
			context: {
				...this.state.context,
				error,
			},
		})
	}

	componentDidCatch(error: Error, errorInfo: unknown): void {
		console.error({ errorInfo })
		this.fatal(error)
	}

	render(): JSX.Element {
		return (
			<errorContext.Provider value={this.state.context}>
				{this.props.children}
			</errorContext.Provider>
		)
	}
}

export const useErrorContext = () => useContext(errorContext)

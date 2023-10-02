import React, { useContext } from 'react'
import { IToastType, IToastsProps } from './toast.types'

interface ToastsContext {
	bug: InstanceType<typeof ToastsProvider>['bug']
	success: InstanceType<typeof ToastsProvider>['success']
	warning: InstanceType<typeof ToastsProvider>['warning']
	toasts: IToastType[]
	remove: (id: number) => void
}

interface State {
	context: ToastsContext
}

export const toastsContext = React.createContext<ToastsContext>(
	{} as ToastsContext
)

export class ToastsProvider extends React.Component<IToastsProps, State> {
	constructor(props: IToastsProps) {
		super(props)
		this.state = {
			context: {
				bug: this.bug,
				success: this.success,
				warning: this.warning,
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

	bug = (msg: string): void => {
		this.addToast(msg, 'error')
	}

	success = (msg: string): void => {
		this.addToast(msg, 'success')
	}

	warning = (msg: string): void => {
		this.addToast(msg, 'warning')
	}

	render(): JSX.Element {
		return (
			<toastsContext.Provider value={this.state.context}>
				{this.props.children}
			</toastsContext.Provider>
		)
	}
}

export const useToastsContext = () => useContext(toastsContext)

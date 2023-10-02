type TToastVariants = 'error' | 'success' | 'warning'

export interface IToastType {
	id: number
	content: React.ReactNode
	type: TToastVariants
}

export interface IToastsProps {
	children: React.ReactNode
}

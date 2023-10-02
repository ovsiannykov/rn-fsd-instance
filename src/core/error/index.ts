export {
	ApiError,
	FatalError,
	PermissionError,
	ValidationError,
	isExtendedError,
	unknownToError,
} from './error'
export type { ExtendedError } from './error'
export { ErrorProvider, useErrorContext } from './error.provider'

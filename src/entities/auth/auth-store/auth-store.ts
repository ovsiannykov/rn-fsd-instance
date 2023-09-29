import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface IAuthStore {
	isUser: boolean

	setIsUser: (payload: boolean) => void
}

export const useAuthStore = create<IAuthStore>()(
	devtools(
		(set) => ({
			isUser: false,

			setIsUser: (isUser: boolean) => set({ isUser }),
		}),
		{ name: 'AuthStore' }
	)
)

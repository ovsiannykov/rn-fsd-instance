import EncryptedStorage from 'react-native-encrypted-storage'

export async function clearStorage(): Promise<void> {
	try {
		await EncryptedStorage.clear()
	} catch (error) {
		console.log(error)
		throw error
	}
}

export async function setAuthTokenToStorage(token: string): Promise<void> {
	try {
		await EncryptedStorage.setItem('auth_token', token)
	} catch (error) {
		console.log('Failed to set token to storage: ', error)
		throw error
	}
}

export async function getAuthTokenFromStorage(): Promise<string | null> {
	try {
		const token = await EncryptedStorage.getItem('auth_token')

		if (token !== null) {
			return token
		} else {
			return null
		}
	} catch (error) {
		console.log('Failed to get token from storage: ', error)
		throw error
	}
}

export async function deleteAuthTokenFromStorage(): Promise<void> {
	try {
		await EncryptedStorage.removeItem('auth_token')
	} catch (error) {
		console.log('Failed to delete token from storage: ', error)
		throw error
	}
}

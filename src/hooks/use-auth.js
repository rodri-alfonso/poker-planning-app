import { useLocalStorage } from './use-local-storage'
import { useId } from 'preact/hooks'
import { auth } from '../signals/auth'

export function useAuth() {
	const { storage, clearStorage, setStorage } = useLocalStorage('planning-poker-dev', auth.value)
	const userId = useId()

	function signIn(userName) {
		const payload = {
			id: userId,
			displayName: userName,
		}

		auth.value = payload
		setStorage(payload)
	}

	function signOut() {
		clearStorage()
		auth.value = null
	}

	return { auth: storage, signIn, signOut }
}

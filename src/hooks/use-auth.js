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
		auth.value = null
		clearStorage()
		window.location.reload()
	}

	return { auth: storage, signIn, signOut }
}

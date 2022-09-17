import { useLocalStorage } from './use-local-storage'
import { useState } from 'preact/hooks'
import { useId } from 'preact/hooks'

export function useAuth() {
	const { localStore, clearStorage } = useLocalStorage('planning-poker-dev')
	const [auth, setAuth] = useState(() => localStore)

	const userId = useId()

	function signIn(userName) {
		setAuth({
			id: userId,
			displayName: userName,
		})
	}

	function signOut() {
		clearStorage()
	}

	return { auth, signIn, signOut }
}

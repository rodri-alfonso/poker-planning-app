import { useEffect } from 'preact/hooks'

export function useLocalStorage(localRef, initialValue) {
	const storage = localStorage.getItem(localRef) && JSON.parse(localStorage.getItem(localRef))

	useEffect(() => {
		if (initialValue) setStorage(initialValue)
	}, [initialValue])

	function setStorage(payload) {
		localStorage.setItem(localRef, JSON.stringify(payload))
	}

	function clearStorage() {
		localStorage.removeItem(localRef)
	}
	return { storage, clearStorage, setStorage }
}

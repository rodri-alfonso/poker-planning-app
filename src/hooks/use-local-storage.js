export function useLocalStorage(localRef) {
	const localStore = localStorage.getItem(localRef) && localStorage.getItem(localRef)

	function clearStorage() {
		localStorage.removeItem(localRef)
	}
	return { localStore, clearStorage }
}

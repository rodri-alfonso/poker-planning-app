import { votingSystem } from '../signals/voting-systems'

export function useSystem() {
	const setSystem = (system) => (votingSystem.value = system)

	return [votingSystem.value, setSystem]
}

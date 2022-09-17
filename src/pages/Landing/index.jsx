import { useState } from 'preact/hooks'
import PlanningCreator from './planning-creator'

function Splash() {
	const [isOpenCreator, setIsOpenCreator] = useState(false)

	if (isOpenCreator) return <PlanningCreator />

	return (
		<main>
			<h1>Poker planning</h1>
			<button onClick={() => setIsOpenCreator(true)}>create</button>
		</main>
	)
}

export default Splash

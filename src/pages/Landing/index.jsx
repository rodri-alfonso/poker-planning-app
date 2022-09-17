import { useState } from 'preact/hooks'
import PlanningCreator from './PlanningCreator'

function Splash() {
	const [isOpenCreator, setIsOpenCreator] = useState(false)

	if (isOpenCreator) return <PlanningCreator />

	return (
		<div>
			<h1>Poker planning</h1>
			<button onClick={() => setIsOpenCreator(true)}>create</button>
		</div>
	)
}

export default Splash

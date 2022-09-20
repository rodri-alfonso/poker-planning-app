import { useState } from 'preact/hooks'
import PlanningCreator from './planning-creator'

function Splash() {
	const [isOpenCreator, setIsOpenCreator] = useState(false)

	if (isOpenCreator) return <PlanningCreator onBack={() => setIsOpenCreator(false)} />

	return (
		<main>
			<h1>Poker planning</h1>

			<section style={{ display: 'flex', gap: '10px' }}>
				<button className='bg-blue p-3 rounded-md' onClick={() => setIsOpenCreator(true)}>
					Create new Planning
				</button>
				<button className='bg-blue p-3 rounded'>Join</button>
			</section>
		</main>
	)
}

export default Splash

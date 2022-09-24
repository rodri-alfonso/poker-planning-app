import { useState } from 'preact/hooks'
import System from './System'

const mockTypes = [
	{ name: 'Fibonacci', system: '(1, 2, 3, 5, 8, 13, 21)' },
	{ name: 'Custom Devs', system: '(0.5, 1, 1.5, 2, 2.5, 3, 3.5)' },
]

export default function SystemsList() {
	const [indexSystem, setIndexSystem] = useState(0)

	return (
		<section className='btn-group btn-group-vertical lg:btn-group-horizontal'>
			{mockTypes.map((system, index) => (
				<System
					key={system.name}
					text={system.name}
					system={system.system}
					onClick={() => setIndexSystem(index)}
					isSelected={indexSystem === index}
				/>
			))}
			<button className='btn'>+</button>
		</section>
	)
}

import { useState } from 'preact/hooks'
import System from './System'
import { useSystem } from '../../hooks/use-system'

const mockTypes = [
	{ name: 'Fibonacci', system: '(1, 2, 3, 5, 8, 13, 21)' },
	{ name: 'Custom', system: '(0.5, 1, 1.5, 2, 2.5, 3, 3.5)' },
]

export default function SystemsList() {
	const [indexSystem, setIndexSystem] = useState(null)
	const [_, setSystem] = useSystem()
	console.log('🚀 ~ file: index.jsx ~ line 13 ~ _', _)

	function handleSelect(system, index) {
		setSystem(system)
		setIndexSystem(index)
	}

	return (
		<section className='btn-group btn-group-vertical lg:btn-group-horizontal'>
			{mockTypes.map((system, index) => (
				<System
					key={system.name}
					text={system.name}
					system={system.system}
					onClick={() => handleSelect(system.system, index)}
					isSelected={indexSystem === index}
				/>
			))}
			{/* <button className='btn'>+</button> */}
		</section>
	)
}

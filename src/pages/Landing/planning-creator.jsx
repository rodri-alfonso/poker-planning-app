import { useState } from 'preact/hooks'
import Modal from '../../components/Modal'
import { Link, useLocation } from 'wouter-preact'

const mockTypes = [{ name: 'Fibonacci' }, { name: 'Custom Devs' }]

function PlanningCreator({ onBack }) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [location, setLocation] = useLocation()

	const Types = ({ types }) => {
		return (
			<section style={{ display: 'flex', gap: '10px' }}>
				{types.map((type) => (
					<button className='bg-purple' key={type.name}>
						{type.name}
					</button>
				))}
				<button className='bg-purple p-2' onClick={() => setIsModalOpen(true)}>
					+
				</button>
			</section>
		)
	}

	function handleCreate() {
		//set the auth here
		// create collection from firebase
		const planning = { id: 'askjdaskjdh' }
		setLocation(`/${planning.id}`)
	}

	return (
		<div>
			<button onClick={onBack}>cancel</button>
			<Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} />
			<Types types={mockTypes} />
			<button onClick={handleCreate}>Create</button>
		</div>
	)
}

export default PlanningCreator

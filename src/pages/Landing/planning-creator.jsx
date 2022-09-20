import { useState } from 'preact/hooks'
import Modal from '../../components/Modal'
import { useAuth } from '../../hooks/use-auth'
import { useLocation } from 'wouter-preact'

const mockTypes = [{ name: 'Fibonacci' }, { name: 'Custom Devs' }]

function PlanningCreator({ onBack }) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { signIn } = useAuth()
	const [_, setLocation] = useLocation()

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
		signIn('lalal')
		setLocation('/planning/laksdaslkd')
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

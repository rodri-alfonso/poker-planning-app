import { useState } from 'preact/hooks'
import Modal from '../../components/Modal'
import { useRoute } from 'wouter-preact'

const mockTypes = [{ name: 'Fibonacci' }, { name: 'Custom Devs' }]

function PlanningCreator() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const router = useRoute()

	const Types = ({ types }) => {
		return (
			<section>
				{types.map((type) => (
					<button key={type.name}>{type.name}</button>
				))}
				<button onClick={() => setIsModalOpen(true)}>+</button>
			</section>
		)
	}

	function handleCreate() {
		//set the auth here
		router.push('/')
	}

	return (
		<div>
			<Types types={mockTypes} />
			<button onClick={handleCreate}>Create</button>
			{isModalOpen && <Modal />}
		</div>
	)
}

export default PlanningCreator

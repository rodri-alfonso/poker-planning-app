import { useState } from 'preact/hooks'
import Modal from '../../components/Modal'
import { useAuth } from '../../hooks/use-auth'
import { useLocation } from 'wouter-preact'
import Input from '../../components/Input'

const mockTypes = [{ name: 'Fibonacci' }, { name: 'Custom Devs' }]

function Creator() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { signIn, auth } = useAuth()
	const [_, setLocation] = useLocation()

	const Types = ({ types }) => {
		return (
			<section style={{ display: 'flex', gap: '10px' }}>
				{types.map((type) => (
					<button className='bg-purple' key={type.name}>
						{type.name}
					</button>
				))}
				<button className='bg-purple p-2'>+</button>
			</section>
		)
	}

	function handleCreate() {
		signIn('lalal')
		setLocation('/planning/laksdaslkd')
	}

	return (
		<div>
			<Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen}>
				<div>holii</div>
				<button onClick={handleCreate}>Crear</button>
				<Input placeholder='holiii' />
			</Modal>
			<Types types={mockTypes} />
			<Input placeholder='Add the name of the Planning' />
			<button onClick={() => (!auth ? setIsModalOpen(true) : handleCreate())}>Create</button>
		</div>
	)
}

export default Creator

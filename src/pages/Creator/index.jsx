import { useState } from 'preact/hooks'
import Modal from '../../components/Modal'
import { useAuth } from '../../hooks/use-auth'
import { Link, useLocation } from 'wouter-preact'
import Input from '../../components/Input'

const mockTypes = [{ name: 'Fibonacci' }, { name: 'Custom Devs' }]

function Creator() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [planing, setPlaning] = useState('')
	const { signIn, auth } = useAuth()
	const [_, setLocation] = useLocation()

	const Type = ({ text, onClick, isSelected }) => {
		function handleClick() {
			if (onClick) onClick()
		}

		return (
			<button onClick={handleClick} className={`btn ${isSelected ? 'btn-active' : ''}`}>
				{text}
			</button>
		)
	}

	const Types = ({ types }) => {
		const [indexType, setIndexType] = useState(0)

		return (
			<section className='btn-group btn-group-vertical lg:btn-group-horizontal'>
				{types.map((type, index) => (
					<Type key={type.name} text={type.name} onClick={() => setIndexType(index)} isSelected={indexType === index} />
				))}
				<button className='btn'>+</button>
			</section>
		)
	}

	function handleCreate() {
		signIn('lalal')
		setLocation('/planning/laksdaslkd')
	}

	return (
		<div className='grid gap-10'>
			<Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen}>
				<div>holii</div>
				<button onClick={handleCreate}>Crear</button>
				<Input placeholder='holiii' />
			</Modal>
			<div className='flex gap-5'>
				<Link href='/'>
					<a className='btn btn-ghost btn-active'>volver</a>
				</Link>
				<Types types={mockTypes} />
			</div>

			<div className='flex gap-4'>
				<Input placeholder='Type a planing name' value={planing} onChange={(e) => setPlaning(e.target.value)} />
				<button disabled={!planing} className='btn' onClick={() => (!auth ? setIsModalOpen(true) : handleCreate())}>
					Create
				</button>
			</div>
		</div>
	)
}

export default Creator

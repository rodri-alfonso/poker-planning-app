import { useState } from 'preact/hooks'
import { useAuth } from '../../hooks/use-auth'
import { Link, useLocation } from 'wouter-preact'
import Input from '../../components/Input'
import SystemsList from '../../components/SystemsList'
import Modal from '../../components/Modal'
import { addPlanning } from '../../lib/utils'

function Creator() {
	const [isLoading, setIsLoading] = useState(false)
	const [planning, setPlanning] = useState('')
	const [username, setUsername] = useState('')
	const { signIn, auth } = useAuth()
	const [_, setLocation] = useLocation()

	function handleCreate() {
		setIsLoading(true)

		addPlanning({
			name: planning,
		}).then((doc) => {
			if (!auth) signIn(username)
			setLocation(`/planning/${doc.id}`)
			setIsLoading(false)
		})
	}

	if (isLoading) return <h1>cargando...</h1>

	return (
		<div className='grid gap-10'>
			<div className='flex gap-5'>
				<Link href='/'>
					<a className='btn btn-ghost btn-active'>volver</a>
				</Link>
				<SystemsList />
			</div>

			<div className='flex gap-4'>
				<Input placeholder='Type a planning name' value={planning} onChange={(e) => setPlanning(e.target.value)} />

				{auth ? (
					<button className='btn' disabled={!planning} onClick={handleCreate}>
						Create
					</button>
				) : (
					<Modal
						disabledLabel={!planning}
						disabledPrimary={!username}
						label='Create'
						title='Put user name'
						labelPrimary="Lest's go!"
						labelSecondary='Cancel'
						onClickPrimary={handleCreate}
					>
						<Input
							placeholder='Username'
							className='input-bordered'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</Modal>
				)}
			</div>
		</div>
	)
}

export default Creator

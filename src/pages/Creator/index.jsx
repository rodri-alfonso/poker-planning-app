import { useState } from 'preact/hooks'
import { useAuth } from '../../hooks/use-auth'
import { useLocation } from 'wouter-preact'
import Input from '../../components/Input'
import SystemsList from '../../components/SystemsList'
import Modal from '../../components/Modal'
import { addPlanning } from '../../lib/utils'
import { useSystem } from '../../hooks/use-system'

function Creator() {
	const [isLoading, setIsLoading] = useState(false)
	const [planning, setPlanning] = useState('')
	const [username, setUsername] = useState('')
	const { signIn, auth } = useAuth()
	const [_, setLocation] = useLocation()
	const [system] = useSystem()

	function handleCreate() {
		setIsLoading(true)
		if (!auth) signIn(username)

		addPlanning({
			room_name: planning,
			intial_date: Date().toString(),
			voting_system: system,
			estimates: [],
			voters: [auth.displayName],
		}).then((doc) => {
			setLocation(`/planning/${doc.id}`)
			setIsLoading(false)
		})
	}

	if (isLoading) return <h1>cargando...</h1>

	return (
		<div className='grid gap-10'>
			<SystemsList />

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

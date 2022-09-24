import { Link } from 'wouter-preact'
import { useAuth } from '../../hooks/use-auth'
import { useLocation } from 'wouter-preact'
import { useState } from 'preact/hooks'
import Modal from '../../components/Modal'
import Input from '../../components/Input'

function Splash() {
	const [_, setLocation] = useLocation()
	const { signIn } = useAuth()
	const [username, setUsername] = useState()

	function handleJoin() {
		signIn(username)
		setLocation('/')
	}

	return (
		<>
			<h1 className='font-semibold text-4xl pb-10'>Poker planning</h1>

			<section style={{ display: 'flex', gap: '10px' }}>
				<Link href='/create'>
					<a className='btn btn-primary'>Create new Planning</a>
				</Link>

				<Modal
					disabledPrimary={!username}
					label='Join'
					title='Put user name'
					labelPrimary="Lest's go!"
					labelSecondary='Cancel'
					onClickPrimary={handleJoin}
				>
					<Input
						placeholder='Username'
						className='input-bordered'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</Modal>
			</section>
		</>
	)
}

export default Splash

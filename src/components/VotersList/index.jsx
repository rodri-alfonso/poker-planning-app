import Voter from './Voter'

const planningUsersMock = [{ name: 'Tony' }, { name: 'Ana' }, { name: 'Mathew' }]

const VotersList = () => {
	return (
		<ul className='flex gap-3'>
			{planningUsersMock.map((user) => (
				<Voter key={user.name} displayName={user.name} />
			))}
		</ul>
	)
}

export default VotersList

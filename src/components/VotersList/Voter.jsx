const Voter = ({ displayName }) => {
	return (
		<li className='flex flex-col gap-1 items-center'>
			<div>{displayName[0]}</div>
			<span>{displayName}</span>
		</li>
	)
}

export default Voter

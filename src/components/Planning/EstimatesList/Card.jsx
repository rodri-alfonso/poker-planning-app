const EstimateCard = ({ name, point }) => {
	return (
		<li className='flex justify-between p-2'>
			<p>{name}</p>
			<span>{point}</span>
		</li>
	)
}

export default EstimateCard

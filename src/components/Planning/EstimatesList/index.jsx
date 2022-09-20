import EstimateCard from './Card'

const estimatesMock = [
	{ name: 'Planning 1', estimation: 3 },
	{ name: 'Planning 2', estimation: 2 },
]

const EstimatesList = () => {
	return (
		<section>
			<h2>Estimate list</h2>
			<ul>
				{estimatesMock.map((estimation) => (
					<EstimateCard name={estimation.name} point={estimation.estimation} />
				))}
			</ul>
		</section>
	)
}

export default EstimatesList

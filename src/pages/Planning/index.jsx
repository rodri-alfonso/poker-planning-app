import EstimatesList from '../../components/EstimatesList'
import VotersList from '../../components/VotersList'

function Planning() {
	//this should be in a collection
	const cardsListMock = [0, 1, 2, 3, 5, 8, 13, 21]

	const Cards = () => {
		return (
			<section className='grid gap-2'>
				{cardsListMock.map((card) => (
					<button className='p-3 bg-green' key={card}>
						{card}
					</button>
				))}
			</section>
		)
	}

	return (
		<main className='grid grid-cols-3'>
			<Cards />
			<VotersList />
			<EstimatesList />
		</main>
	)
}

export default Planning

import EstimatesList from '../../components/EstimatesList'
import VotersList from '../../components/VotersList'
import { useLocation, useRoute } from 'wouter-preact'
import { usePlanning } from '../../hooks/use-planning'

function Planning() {
	const [, setLocation] = useLocation()
	const [, params] = useRoute('/planning/:planningId')

	const response = usePlanning(params.planningId)
	console.log('🚀 ~ file: index.jsx ~ line 10 ~ response', response)

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

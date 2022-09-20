import EstimatesList from '../../components/Planning/EstimatesList'
import VotersList from '../../components/Planning/VotersList'

function Planning() {
	//cuando te estes por salir de la ventana, que te pregunte si queres terminar la sesion de planning

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

import { Link, useLocation } from 'wouter-preact'
import { usePlannings } from '../../hooks/use-planning'

function Home() {
	const [, setLocation] = useLocation()
	const { data, error, loading } = usePlannings()

	return (
		<main className='grid gap-6'>
			<section>
				<h1 className='font-bold pb-4'>Live plannings</h1>

				<ul className='grid gap-4'>
					{data &&
						data.map((planning) => (
							<li className='flex gap-2 bg-gray p-3 rounded-md items-center justify-between'>
								<p>{planning.room_name}</p>
								<span>Owner</span>
								<div>Participans</div>

								<Link href={`/planning/${planning.id}`}>
									<a className='btn btn-primary'>Join</a>
								</Link>
							</li>
						))}
				</ul>
			</section>
		</main>
	)
}

export default Home

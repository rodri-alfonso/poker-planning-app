import { useLocation } from 'wouter-preact'
import Navbar from '../../components/Navbar'

function Home() {
	const [_, setLocation] = useLocation()

	return (
		<main>
			<Navbar />

			<section>
				<h1>Live plannings</h1>
				<ul>
					<li className='flex gap-2 bg-gray p-3 rounded-md'>
						<p>Name</p>
						<span>Owner</span>
						<div>Participans</div>
						<button onClick={() => setLocation('/planning/lskadjslk')}>Join</button>
					</li>
				</ul>
			</section>
		</main>
	)
}

export default Home

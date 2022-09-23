import { Link } from 'wouter-preact'

function Splash() {
	return (
		<main>
			<h1>Poker planning</h1>

			<section style={{ display: 'flex', gap: '10px' }}>
				<Link href='/create'>
					<a>Create new Planning</a>
				</Link>
				<button className='bg-blue p-3 rounded'>Join</button>
			</section>
		</main>
	)
}

export default Splash

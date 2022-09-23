import { Link } from 'wouter-preact'

function Splash() {
	return (
		<>
			<h1 className='font-semibold text-4xl pb-10'>Poker planning</h1>

			<section style={{ display: 'flex', gap: '10px' }}>
				<Link href='/create'>
					<a className='btn btn-primary'>Create new Planning</a>
				</Link>
				<button className='btn'>Join</button>
			</section>
		</>
	)
}

export default Splash

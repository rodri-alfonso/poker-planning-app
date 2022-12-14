import Navbar from './Navbar'

function Layout({ children }) {
	return (
		<main className='bg-gray-dark rounded-xl p-11 w-full max-w-screen-lg grid gap-6'>
			<Navbar />
			{children}
		</main>
	)
}

export default Layout

import Layout from './components/Layout'
import { Switch, Route, Redirect } from 'wouter-preact'
import Planning from './pages/Planning'
import Landing from './pages/Landing'
import { useAuth } from './hooks/use-auth'
import Home from './pages/Home'
import Creator from './pages/Creator'

const PrivateRouter = () => {
	return (
		<Switch>
			<Route path='/planning/:id' component={Planning} />
			<Route path='/create' component={Creator} />
			<Route path='/' component={Home} />
			<Redirect to='/' />
		</Switch>
	)
}

const PublicRouter = () => {
	return (
		<Switch>
			<Route path='/' component={Landing} />
			<Route path='/create' component={Creator} />
			<Redirect to='/' />
		</Switch>
	)
}

export function App() {
	const { auth, signOut } = useAuth()

	return (
		<Layout>
			<button onClick={signOut}>Logout</button>
			{auth ? <PrivateRouter /> : <PublicRouter />}
		</Layout>
	)
}

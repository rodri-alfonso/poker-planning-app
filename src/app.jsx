import Layout from './components/Layout'
import { Switch, Route, Redirect } from 'wouter-preact'
import Home from './pages/Home'
import Landing from './pages/Landing'
import { useAuth } from './hooks/use-auth'

const PrivateRouter = () => {
	return (
		<Switch>
			<Route path='/:planningId' component={Home} />
			<Redirect to='/' />
		</Switch>
	)
}

const PublicRouter = () => {
	return (
		<Switch>
			<Route path='/' component={Landing} />
			<Redirect to='/' />
		</Switch>
	)
}

export function App() {
	const { auth } = useAuth()

	return <Layout>{auth ? <PrivateRouter /> : <PublicRouter />}</Layout>
}

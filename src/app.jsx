import Layout from './components/Layout'
import { Switch, Route, Redirect } from 'wouter-preact'
import Home from './pages/Home'
import Splash from './pages/Splash'

const PrivateRouter = () => {
	return (
		<Switch>
			<Route path='/' component={Home} />
			<Redirect to='/' />
		</Switch>
	)
}

export function App() {
	const isAuth = false

	return <Layout>{isAuth ? <PrivateRouter /> : <Splash />}</Layout>
}

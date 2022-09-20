import Layout from './components/Layout'
import { Switch, Route, Redirect } from 'wouter-preact'
import Home from './pages/Home'
import Landing from './pages/Landing'
import { useState } from 'preact/hooks'

const PrivateRouter = () => {
	return (
		<Switch>
			<Route path='/:planningId' component={Home} />
			{/* <Redirect to='/' /> */}
		</Switch>
	)
}

export function App() {
	const [auth, setAuth] = useState(false)

	if (!auth) return <Landing />

	return (
		<Layout>
			<button onClick={() => setAuth(true)}>click me</button>
			<PrivateRouter />
		</Layout>
	)
}

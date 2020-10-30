import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RandomQuotes from './components/RandomQuotes';

export default function App() {
    return (
        <div>
			<Router>
				<Switch>
					<Route path='/'>
						<RandomQuotes />
					</Route>
				</Switch>
			</Router>
		</div>
    )
}
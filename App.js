import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import QuotesRandomly from './components/QuotesRandomly';

export default function App() {
    return (
        <div>
			<Router>
				<Switch>
					<Route path='/'>
						<QuotesRandomly />
					</Route>
				</Switch>
			</Router>
		</div>
    )
}
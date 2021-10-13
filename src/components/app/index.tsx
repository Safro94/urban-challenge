import { ErrorBoundary } from 'react-error-boundary';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Error from '../error';

import { HOME, WORKERS } from '../../constants/routes';

import Home from '../../pages/home';
import Workers from '../../pages/workers';
import NotFound from '../../pages/notFound';

import { Container } from './index.styles';

const App = () => {
	return (
		<Router>
			<Container>
				<ErrorBoundary FallbackComponent={Error}>
					<Switch>
						<Route exact path={HOME}>
							<Home />
						</Route>

						{/* This route should be a private route
						based on the user login status but
						creating a whole login would have taken a lot of time */}
						<Route path={WORKERS}>
							<Workers />
						</Route>

						<Route component={NotFound} />
					</Switch>
				</ErrorBoundary>
			</Container>
		</Router>
	);
};

export default App;

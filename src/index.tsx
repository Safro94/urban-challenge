import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './components/app';

import { ApplicationProvider } from './hooks/application';

import GlobalStyle from './theme/globalStyles';
import { theme } from './theme';

ReactDOM.render(
	<ApplicationProvider>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</ApplicationProvider>,
	document.getElementById('root')
);

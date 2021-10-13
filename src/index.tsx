import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './components/app';

import GlobalStyle from './theme/globalStyles';
import { theme } from './theme';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<App />
	</ThemeProvider>,
	document.getElementById('root')
);

import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './components/app';

import { ApplicationProvider } from './hooks/application';
import { CartProvider } from './hooks/cart';

import GlobalStyle from './theme/globalStyles';
import { theme } from './theme';

ReactDOM.render(
	<ApplicationProvider>
		<CartProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</CartProvider>
	</ApplicationProvider>,
	document.getElementById('root')
);

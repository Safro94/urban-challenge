import { theme } from '../';

describe('Theme', () => {
	it('should return a theme with breakpoints and palette', () => {
		const expectedTheme = {
			breakpoints: {
				mobile: `(min-width: 425px)`,
				tablet: `(min-width: 780px)`,
				laptop: `(min-width: 992px)`,
				desktop: `(min-width: 1240px)`,
			},

			palette: {
				common: {
					background: '#f7f7f7',
					white: '#fff',
					black: '#1a1a1a',
					grey: '#ccc',
				},

				primary: {
					main: '#003a46',
					text: '#fff',
				},
			},
		};

		expect(theme).toStrictEqual(expectedTheme);
	});
});

import history from '../utils/history';

export const ROUTES = {
	Home: '/',
	Trade: '/trade',
	TradeMatch: '/trade/:baseCurrencyKey-:quoteCurrencyKey',
	Loans: '/loans',
	Assets: {
		Home: '/assets',
		Overview: '/assets/overview',
		Exchanges: '/assets/exchanges',
		Transfers: '/assets/transfers',
	},
	Markets: '/markets',
};

export const navigateTo = (path, replacePath = false, scrollToTop = false) => {
	if (scrollToTop) {
		window.scrollTo(0, 0);
	}
	replacePath ? history.replace(path) : history.push(path);
};

export const navigateToTrade = (baseCurrencyKey, quoteCurrencyKey, replacePath = false) =>
	navigateTo(`${ROUTES.Trade}/${baseCurrencyKey}-${quoteCurrencyKey}`, replacePath);

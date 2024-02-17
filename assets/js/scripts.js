document.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
	let theme = localStorage.getItem('theme');

	const setTheme = (toSet) => {
		theme = toSet;
		document.documentElement.setAttribute('data-theme', theme);
	};

	const saveTheme = (toSave) => {
		localStorage.setItem('theme', toSave);
	}

	if ((!theme && darkModeQuery.matches) || theme === 'dark') {
		setTheme('dark');
	}

	const themeSwitcherBtn = document.getElementById('js-theme-switcher-button');

	if (themeSwitcherBtn) {
		themeSwitcherBtn.addEventListener('click', function() {
			// eslint-disable-next-line no-console
			const newTheme = theme === 'dark' ? 'light' : 'dark';
			console.log(newTheme);
			setTheme(newTheme);
			saveTheme(newTheme);
		});
	}
});

document.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
	let theme = localStorage.getItem('theme');

	const setTheme = (themeToSet) => {
		theme = themeToSet;
		document.documentElement.setAttribute('data-theme', theme);
	};

	const saveTheme = (themeToSave) => {
		localStorage.setItem('theme', themeToSave);
	}

	if ((!theme && darkModeQuery.matches) || theme === 'dark') {
		setTheme('dark');
	}

	const themeSwitcherBtn = document.getElementById('js-theme-switcher-button');

	if (themeSwitcherBtn) {
		themeSwitcherBtn.addEventListener('click', function() {
			const newTheme = theme === 'dark' ? 'light' : 'dark';
			setTheme(newTheme);
			saveTheme(newTheme);
		});
	}
});

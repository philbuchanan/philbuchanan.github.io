document.addEventListener('DOMContentLoaded', function() {
	'use strict';

	const themeSwitcherBtn = document.getElementById('js-theme-switcher-button');

	if (themeSwitcherBtn) {
		const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
		let theme = localStorage.getItem('theme');

		const setTheme = function(newTheme, save) {
			theme = newTheme;
			document.documentElement.setAttribute('data-theme', theme);

			if (save) {
				localStorage.setItem('theme', theme);
			}
		};

		if ((!theme && darkModeQuery.matches) || theme === 'dark') {
			setTheme('dark', false);
		}

		themeSwitcherBtn.addEventListener('click', function(event) {
			setTheme(theme === 'dark' ? 'light' : 'dark', true);
		});
	}
});

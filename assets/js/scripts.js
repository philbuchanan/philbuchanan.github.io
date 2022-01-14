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

	const detailsButton = document.getElementById('js-details-button');

	if (detailsButton) {
		const controlsIds = detailsButton.getAttribute('aria-controls').split(' ');
		let detailsVisible = false;

		detailsButton.addEventListener('click', function(event) {
			event.preventDefault();

			const controls = controlsIds.map(function(id) {
				return document.getElementById(id);
			});

			controls.forEach(function(control) {
				if (detailsVisible) {
					control.hidden = true;
					control.setAttribute('aria-expanded', false);
				}
				else {
					control.hidden = false;
					control.setAttribute('aria-expanded', true);
				}
			});

			detailsButton.innerText = detailsVisible
				? 'Show Details'
				: 'Hide Details';

			detailsVisible = !detailsVisible;
		});
	}
});

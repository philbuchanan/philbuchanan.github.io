(function() {
	'use strict';
	
	var lastScrollPosition = window.scrollY,
	
	footer = {
	
		footer: document.getElementById('footer'),
		
		hide: function() {
			this.footer.className = 'hidden';
		},
		
		show: function() {
			this.footer.className = '';
		}
	
	},
	
	isTouchDevice = function() {
	
		return !!('ontouchstart' in window) || !!('onmsgesturechange' in window);
	
	};
	
	window.onscroll = function(ev) {
	
		if (isTouchDevice() ||
			lastScrollPosition - window.scrollY > 0 ||
			lastScrollPosition < 25 ||
			window.innerHeight + window.scrollY >= document.body.offsetHeight - 125) {
			footer.show();
		}
		else {
			footer.hide();
		}
		
		lastScrollPosition = window.scrollY;
	
	};

}());
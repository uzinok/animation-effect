const animation = document.querySelector('.animation-2');
const animationItems = document.querySelectorAll('[class^="block-"]');

animation.classList.remove('no-js');

setTimeout(function() {

	animation.classList.add('animation');

	animationItems.forEach(element => {
		setTimeout(function() {
			element.style.opacity = 1;
		}, element.dataset.delay);
	});

}, 3000);

const noJs = document.querySelector('.no-js');

const animationTwo = document.querySelector('.animation-2');
const animationThree = document.querySelector('.animation-3');

const animationItems = document.querySelectorAll('[class^="block-"]');

noJs.classList.remove('no-js');

setTimeout(function() {

	animationTwo.classList.add('animation');
	animationThree.classList.add('animation');

	animationItems.forEach(element => {
		setTimeout(function() {
			element.style.opacity = 1;
		}, element.dataset.delay);
	});

}, 2000);

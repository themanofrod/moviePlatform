const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('close-menu');
	menu.classList.toggle('menu-open');
	console.log('info');
});
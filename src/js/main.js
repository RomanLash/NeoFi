document.addEventListener("DOMContentLoaded", function() {
	// Бургер-меню
	const burger = document.querySelector(".header__burger");
	const menu = document.querySelector(".header__nav-wrapper");

	if (!burger || !menu) return;

	// Функція відкриття/закриття меню
	burger.addEventListener("click", function(e) {
		e.preventDefault();

		burger.classList.toggle("is-active");
		menu.classList.toggle("is-active");
	});

	// Опціонально: закриття меню при кліку на посилання всередині меню
	const menuLinks = menu.querySelectorAll("a");

	menuLinks.forEach(link => {
		link.addEventListener("click", () => {
			burger.classList.remove("is-active");
			menu.classList.remove("is-active");
		});
	});

	// закриття меню при зміні розміру вікна (якщо екран став десктопним)
	window.addEventListener("resize", () => {
		if (window.innerWidth >= 768) { // заміни 768 на свій брейкпоінт md
			burger.classList.remove("is-active");
			menu.classList.remove("is-active");
		}
	});

	// дублюваняя header__actions в mobile nav
	const actions = document.querySelector(".header__actions");
	const navWrapper = document.querySelector(".header__nav-wrapper");

	// Клонувати і додати в меню (найпростіше)
	const actionsMobile = actions.cloneNode(true);
	actionsMobile.classList.add("actions--mobile");
	navWrapper.appendChild(actionsMobile);
});

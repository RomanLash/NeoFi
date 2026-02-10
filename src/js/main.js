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


	//// відкривання modal

	const loginLinks = document.querySelectorAll(".header__actions");

	// Функція відкриття модалки
	function openModal() {
		const modal = document.querySelector(".modal");
		if (modal) {
			modal.classList.add("is-active");
			document.body.style.overflow = "hidden";

			// фокус на перше поле вводу (якщо є)
			const firstInput = modal.querySelector("input");
			if (firstInput) firstInput.focus();
		}
	}
	// Функція закриття модалки
	function closeModal() {
		const modal = document.querySelector(".modal");
		if (modal) {
			modal.classList.remove("is-active");
			document.body.style.overflow = "";
		}
	}

	// Вішаємо клік на всі Log in
	loginLinks.forEach(link => {
		link.addEventListener("click", (e) => {
			e.preventDefault();
			openModal();
		});
	});

	// Закриття по кнопці
	const closeBtn = document.querySelector(".modal__close");
	if (closeBtn) {
		closeBtn.addEventListener("click", closeModal);
	}

	// Закриття по кліку на overlay
	const overlay = document.querySelector(".modal__overlay");
	if (overlay) {
		overlay.addEventListener("click", closeModal);
	}

	// Закриття по Escape
	document.addEventListener("keydown", (e) => {
		const modal = document.querySelector(".modal");
		if (e.key === "Escape" && modal?.classList.contains("is-active")) {
			closeModal();
		}
	});
});

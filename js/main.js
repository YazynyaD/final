// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.toggle('dropdown__button--active');
	});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
});


$(document).ready(function() {
	//прикрепляем клик по заголовкам acc-head
	$('#accordeon .acc-head').on('click', f_acc);
  });
  
  function f_acc(){
	$('#accordeon .acc-body').not($(this).next()).slideUp(500);
	$(this).next().slideToggle(500);
  }

  
  	const accHead = document.querySelectorAll("acc-head");
	const actives = document.getElementsByClassName('active');




	for (i = 0; accHead.length > i; i++) {
	accHead[i].onclick = function() {
		var currentActive = actives[0];
		if (currentActive)
		currentActive.classList.remove("active");
		
		if (currentActive !== this)
		this.classList.add("active");

	};
	};

	


	document.querySelectorAll('.accordion__container').forEach(function (acc) {
		const accList = acc.querySelector('.acc__list');
		const accCard = acc.querySelector('.accordion__card');
		const accAutor = acc.querySelector('.accordion__autor')
		const accListItems =  acc.querySelectorAll('.acc__item');	
		const actives = acc.getElementsByClassName('acc__active');

	for (let i = 0; i < accListItems.length; i++) {
		const item1 = accListItems[i].textContent == accAutor.textContent;
			if (item1) {
				accListItems[i].onclick = function() {
				accCard.classList.toggle('acc__active');
				};
			}else {
				
			};
		
	}});

	document.querySelectorAll('.accordion__container').forEach(function (acc) {
		const accList = acc.querySelector('.acc__list');
		const accCard = acc.querySelector('.accordion__card');
		const accCardOlga = acc.querySelector('.accordion__card_olga');
		const accCardDef = acc.querySelector('.accordion__card_default');
		const accAutor = acc.querySelector('.accordion__autor')
		const accListItems =  acc.querySelectorAll('.acc__item');	

	for (let i = 0; i < accListItems.length; i++) {
		const item1 = accListItems[i].textContent == accAutor.textContent;
		const item2 = accListItems[i].textContent !== accAutor.textContent;
			if (item1) {
				accListItems[i].onclick = function() {
				accCardOlga.classList.toggle('acc__active');
				accCardDef.classList.remove('acc__active');
				};
			}else if (item2) {
				accListItems[i].onclick = function() {
				accCardOlga.classList.remove('acc__active');
				accCardDef.classList.toggle('acc__active');
			}};
			
	}

	accList.addEventListener('click', e => {
	e.stopPropagation();
	});

	// document.addEventListener('click', function (e) {
	// 	if (e.target !== accListItems[i]) {
	// 		console.log(accCardOlga)
	// 		accCardOlga.classList.remove('acc__active');
	// 		accCardDef.classList.remove('acc__active');
	// }});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			accCardOlga.classList.remove('acc__active');
			accCardDef.classList.remove('acc__active');
		}
	});
	

	
});
	
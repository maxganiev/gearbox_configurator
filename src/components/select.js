export const component_select = {
	elem: null,
	elems: [],

	createElem: function (
		selectorIdValue,
		classnames,
		parentElem,
		howMany,
		optionsValues,
		disabledOptionsList,
		optionsAttrs,
		indexOfSelected,
		positionToAdd,
		optionsClassNames,
		callback
	) {
		for (
			let i = positionToAdd === 'afterbegin' ? howMany - 1 : 0;
			positionToAdd === 'afterbegin' ? i >= 0 : i < howMany;
			positionToAdd === 'afterbegin' ? i-- : i++
		) {
			this.elem = document.createElement('select');
			this.elem.classList.add(...classnames);
			this.elem.id = `select-${selectorIdValue}-${i}`;

			optionsValues.forEach((value, index) => {
				const option = document.createElement('option');
				option.disabled = disabledOptionsList[index];
				option.value = value;
				option.innerHTML = value;
				option.setAttribute('data-value', optionsAttrs[index]);
				option.classList.add(optionsClassNames[index]);
				this.elem.appendChild(option);

				option.selected = indexOfSelected - 1 === index ? true : false;
			});

			parentElem.insertAdjacentElement(positionToAdd, this.elem);
			this.elems.push(this.elem);

			this.elem.removeEventListener('change', fireOnChange);

			//adding event listener to assign class and perform certain actions:
			this.elem.addEventListener('change', fireOnChange);
		}

		function fireOnChange(e) {
			callback !== undefined && typeof callback !== undefined && callback(e, ...arguments);
		}
	},

	updateElem: function (selectorsId, newOptionsValues, newDisabledOptionsList, newOptionsAttrs, newOptionsClassNames) {
		const selectorsToModify = this.elems.filter((selector) => selectorsId.indexOf(selector.id) !== -1);

		selectorsToModify.forEach((selector) => {
			//clearing old options:
			while (selector.firstElementChild) {
				selector.firstElementChild.remove();
			}

			//filling new ones:
			newOptionsValues.forEach((value, index) => {
				const option = document.createElement('option');
				option.disabled = newDisabledOptionsList[index];
				option.value = value;
				option.setAttribute('data-value', newOptionsAttrs[index]);
				option.classList.add(newOptionsClassNames[index]);
				selector.appendChild(option);
			});

			console.log(this.elems);
		});
	},

	destroyElem: function (parentElem, selectId) {
		Array.from(parentElem.children).forEach((child) => child.id === selectId && child.remove());
		this.elems.forEach((elem) => elem === null);
		this.elems = [];
	},
};

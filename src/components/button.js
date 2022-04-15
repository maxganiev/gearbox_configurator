export const component_button = {
	elem: null,

	createElem: function (
		classnames,
		parentElem,
		howMany,
		values,
		attrValues,
		higlightable,
		indexToHighlightIfSelected,
		diselectable,
		positionToAdd,
		callback
	) {
		for (
			let i = positionToAdd === 'afterbegin' ? howMany - 1 : 0;
			positionToAdd === 'afterbegin' ? i >= 0 : i < howMany;
			positionToAdd === 'afterbegin' ? i-- : i++
		) {
			this.elem = document.createElement('button');
			this.elem.classList.add(...classnames);

			if (higlightable) {
				i === indexToHighlightIfSelected
					? this.elem.classList.add('btn-selected')
					: this.elem.classList.add('btn-non-selected');
			}

			this.elem.id = `btn-${parentElem.id !== '' ? parentElem.id : parentElem.tagName.toLowerCase()}-${attrValues[i]}-${i}`;
			this.elem.setAttribute('data-value', attrValues[i]);
			this.elem.innerHTML = values[i];
			parentElem.insertAdjacentElement(positionToAdd, this.elem);

			this.elem.removeEventListener('click', fireOnClick);

			//adding event listener to assign class and perform certain actions:
			this.elem.addEventListener('click', fireOnClick);
		}

		function fireOnClick(e) {
			if (Array.from(e.target.classList).some((className) => className.includes('btn-non-selected'))) {
				e.target.classList.replace('btn-non-selected', 'btn-selected');

				Array.from(parentElem.children).forEach((child) => {
					child.id !== e.target.id && child.classList.replace('btn-selected', 'btn-non-selected');
				});
			} else if (Array.from(e.target.classList).some((className) => className.includes('btn-selected')) && diselectable) {
				e.target.classList.replace('btn-selected', 'btn-non-selected');
			}

			callback !== undefined && typeof callback !== undefined && callback(e, ...arguments);
		}
	},
};

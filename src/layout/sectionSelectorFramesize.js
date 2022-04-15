import { state } from '../globe_state.js';
import { component_button } from '../components/button.js';

export const html_sectionSelectorFrameSize = {
	elem: document.getElementById('section-selector-framesize'),
	toggler: document.getElementById('checkbox-section-selector-framesize-check-framesize-extended'),

	setElemContent: function () {
		const currentType = state.framesizesList.filter((item) => Object.keys(item)[0] === state.currentReductorType)[0];
		Array.from(this.elem.children).forEach((child) => child.classList.contains('div-btn-group') && child.remove());

		const divBtnGroup = document.createElement('div');
		divBtnGroup.classList.add('div-btn-group');
		this.elem.appendChild(divBtnGroup);

		const divGroup = Array.from(this.elem.children).find((child) => child.classList.contains('div-group'));

		component_button.createElem(
			['btn', 'btn-sm'],
			divBtnGroup,
			currentType[state.currentReductorType].length,
			currentType[state.currentReductorType],
			currentType[state.currentReductorType],
			true,
			0,
			false,
			'afterbegin',
			function (e) {
				return fillInputValues(e.target);
			}
		);

		Array.from(divBtnGroup.children)
			.filter((child) => child.id.includes('btn-div'))
			.forEach((child) =>
				child.getAttribute('data-value') == currentType.setByDefault
					? child.classList.replace('btn-non-selected', 'btn-selected')
					: child.classList.replace('btn-selected', 'btn-non-selected')
			);

		fillInputValues(
			Array.from(divBtnGroup.children)
				.filter((child) => child.id.includes('btn-div'))
				.find((child) => !child.classList.contains('btn-non-selected'))
		);

		this.toggler.removeEventListener('change', fireOnChange);
		this.toggler.addEventListener('change', fireOnChange);

		function fireOnChange(e) {
			Array.from(divGroup.children)
				.filter((child) => (child.tagName === 'INPUT' && child.type === 'text') || child.tagName === 'SPAN')
				.forEach((child) =>
					e.target.checked
						? child.classList.replace('extended-hidden', 'extended-visible')
						: child.classList.replace('extended-visible', 'extended-hidden')
				);
		}

		function fillInputValues(targetElement) {
			const startValue =
				targetElement.previousElementSibling !== null && targetElement.previousElementSibling.tagName === 'BUTTON'
					? targetElement.previousElementSibling.getAttribute('data-value')
					: targetElement.value;
			const currentValue = targetElement.getAttribute('data-value');
			const endValue =
				targetElement.nextElementSibling !== null && targetElement.nextElementSibling.tagName === 'BUTTON'
					? targetElement.nextElementSibling.getAttribute('data-value')
					: targetElement.value;

			const values = [startValue, currentValue, endValue];

			Array.from(divGroup.children)
				.filter((child) => child.tagName === 'INPUT' && child.type === 'text')
				.forEach((child, index) => (child.value = values[index]));

			Array.from(divGroup.children)
				.filter((child) => child.tagName === 'SPAN')
				.forEach((child, index) => (child.innerText = index === 0 ? '-1' : '+1'));
		}
	},
};

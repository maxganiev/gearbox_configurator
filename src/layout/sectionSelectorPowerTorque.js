import { component_button } from '../components/button.js';
import { state } from '../globe_state.js';
import noUiSlider from '/catalog/view/javascript/podbor/gearbox/gearbox/node_modules/nouislider/dist/nouislider.mjs';

export const html_sectionSelectorPowerTorque = {
	elem: document.getElementById('section-selector-power-torque'),
	toggler: document.getElementById('checkbox-section-selector-power-torque-check-power-extended'),

	setElemContent: function () {
		this.div = {
			front: Array.from(this.elem.children).find((child) => child.classList.contains('face-front')),
			rear: Array.from(this.elem.children).find((child) => child.classList.contains('face-rear')),
		};

		////select by power:
		const currentType = state.motorpowerList.filter((item) => Object.keys(item)[0] === state.currentReductorType)[0];
		Array.from(this.div.front.children).forEach((child) => child.classList.contains('div-btn-group') && child.remove());

		const divBtnGroup = document.createElement('div');
		divBtnGroup.classList.add('div-btn-group');
		this.div.front.appendChild(divBtnGroup);

		const _this = this;

		component_button.createElem(
			['btn', 'btn-sm'],
			divBtnGroup,
			currentType[state.currentReductorType].length,
			currentType[state.currentReductorType],
			currentType[state.currentReductorType],
			true,
			0,
			false,
			'beforeend',
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
			const divGroupFront = Array.from(_this.div.front.children).find((child) => child.classList.contains('div-group'));

			Array.from(divGroupFront.children)
				.filter((child) => (child.tagName === 'INPUT' && child.type === 'number') || child.tagName === 'SPAN')
				.forEach((child) =>
					e.target.checked
						? child.classList.replace('extended-hidden', 'extended-visible')
						: child.classList.replace('extended-visible', 'extended-hidden')
				);
		}

		function fillInputValues(targetElement) {
			const divGroupFront = Array.from(_this.div.front.children).find((child) => child.classList.contains('div-group'));

			const startValue =
				targetElement.previousElementSibling !== null && targetElement.previousElementSibling.tagName === 'BUTTON'
					? Number(targetElement.previousElementSibling.getAttribute('data-value'))
					: targetElement.value;
			const currentValue = Number(targetElement.getAttribute('data-value'));
			const endValue =
				targetElement.nextElementSibling !== null && targetElement.nextElementSibling.tagName === 'BUTTON'
					? Number(targetElement.nextElementSibling.getAttribute('data-value'))
					: targetElement.value;

			const values = [startValue, currentValue, endValue];

			Array.from(divGroupFront.children)
				.filter((child) => child.tagName === 'INPUT' && child.type === 'number')
				.forEach((child, index) => (child.value = values[index]));

			Array.from(divGroupFront.children)
				.filter((child) => child.tagName === 'SPAN')
				.forEach((child, index) => (child.innerText = index === 0 ? '-1' : '+1'));
		}

		////select by torque:
		const divRange = Array.from(this.div.rear.children).find((child) => child.classList.contains('div-range'));

		//create slider if it yes has not been created:
		if (divRange.firstElementChild === null) {
			noUiSlider.create(divRange, {
				start: [0],
				connect: true,
				range: {
					min: 0,
					max: currentType.maxTorqueMoment,
				},
				pips: {
					mode: 'count',
					values: 3,
				},
			});
		} //or updating the existing one:
		else {
			divRange.noUiSlider.updateOptions({
				range: {
					min: 0,
					max: currentType.maxTorqueMoment,
				},
			});
		}

		//setting input values:
		const slider = document.querySelector('.noUi-handle.noUi-handle-lower');
		const divGroupRear = Array.from(this.div.rear.children).find((child) => child.classList.contains('div-group'));

		divRange.noUiSlider.on('update', () => {
			const currentValue = Math.ceil(Number(slider.getAttribute('aria-valuenow')));
			const startValue = Math.floor(currentValue * 0.85);
			const endValue =
				Math.floor(currentValue * 1.1) <= currentType.maxTorqueMoment
					? Math.floor(currentValue * 1.1)
					: currentType.maxTorqueMoment;

			const values = [startValue, currentValue, endValue];

			Array.from(divGroupRear.children)
				.filter((child) => child.tagName === 'INPUT' && child.type === 'number')
				.forEach((child, index) => (child.value = values[index]));
		});
	},
};

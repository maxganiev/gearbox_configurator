import { state } from '../globe_state.js';
import { component_select } from '../components/select.js';

export const html_sectionSelectorReductorRange = {
	elem: document.getElementById('section-selector-reductor-range'),

	setElemContent: function () {
		const optionsClassNames = state.serviceFactor.list.map((item) =>
			item < state.serviceFactor.lowerLimit || item > state.serviceFactor.upperLimit ? 'danger' : 'default'
		);

		if (Array.from(this.elem.children).every((child) => child.tagName !== 'SELECT')) {
			component_select.createElem(
				'set-service-factor',
				['form-select', 'default'],
				this.elem,
				2,
				state.serviceFactor.list,
				[false, false, false, false, false, false, false, false, false, false, false, false],
				state.serviceFactor.list,
				3,
				'beforeend',
				optionsClassNames,
				function (e) {
					Number(e.target.value) < state.serviceFactor.lowerLimit ||
					Number(e.target.value) > state.serviceFactor.upperLimit
						? e.target.classList.replace('default', 'danger')
						: e.target.classList.replace('danger', 'default');
				}
			);
		}
	},
};

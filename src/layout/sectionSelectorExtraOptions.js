import { state } from '../globe_state.js';
import { component_button } from '../components/button.js';

export const html_sectionSelectorExtraOptions = {
	elem: document.getElementById('section-selector-extra-options'),
	toggler: document.getElementById('checkbox-section-selector-extra-options-typeof-connection'),

	setElemContent: function () {
		Array.from(this.elem.children).forEach((child) => child.classList.contains('div-btn-group') && child.remove());

		const divBtnGroup = document.createElement('div');
		divBtnGroup.classList.add('div-btn-group');
		this.elem.appendChild(divBtnGroup);

		component_button.createElem(
			['btn'],
			divBtnGroup,
			2,
			['5АИ', 'ESQ'],
			['5AI', 'ESQ'],
			true,
			null,
			true,
			'beforeend',
			function (e) {}
		);

		component_button.createElem(
			['btn'],
			divBtnGroup,
			1,
			['Сделать подбор'],
			['submit'],
			false,
			null,
			false,
			'beforeend',
			function (e) {
				console.log(e.target.innerText);
			}
		);
	},
};

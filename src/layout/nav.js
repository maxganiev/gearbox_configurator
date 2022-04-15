import { component_button } from '../components/button.js';
import { state } from '../globe_state.js';
import { html_sectionImg } from './sectionImg.js';
import { html_sectionSelectorOutputRpm } from './sectionSelectorOutputRpm.js';
import { html_sectionSelectorPowerTorque } from './sectionSelectorPowerTorque.js';
import { html_sectionSelectorReductorRange } from './sectionSelectorReductorRange.js';
import { html_sectionSelectorFrameSize } from './sectionSelectorFramesize.js';

export const html_nav = document.getElementsByTagName('nav')[0];

component_button.createElem(
	['btn', 'btn-selector-selectby-type'],
	html_nav,
	7,
	state.reductorTypes,
	state.reductorTypes,
	true,
	0,
	false,
	'afterbegin'
);

html_nav.addEventListener('click', (e) => {
	//proceed if buttom has been pushed:
	if (e.target.id.includes('btn-nav')) {
		state.setCurrentReductorType(e.target.getAttribute('data-value'));
		html_sectionImg.setElemContent(e.target.getAttribute('data-value'));
		html_sectionSelectorOutputRpm.setElemContent(e.target.getAttribute('data-value'));
		html_sectionSelectorPowerTorque.setElemContent();
		html_sectionSelectorReductorRange.setElemContent();
		html_sectionSelectorFrameSize.setElemContent();
	}
});

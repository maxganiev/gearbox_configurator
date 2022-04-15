import { html_nav } from '../src/layout/nav.js';
import { html_sectionImg } from '../src/layout/sectionImg.js';
import { html_sectionSelectorOutputRpm } from '../src/layout/sectionSelectorOutputRpm.js';
import { html_sectionSelectorPowerTorque } from '../src/layout/sectionSelectorPowerTorque.js';
import { html_sectionSelectorReductorRange } from '../src/layout/sectionSelectorReductorRange.js';
import { html_sectionSelectorFrameSize } from '../src/layout/sectionSelectorFramesize.js';
import { html_sectionSelectorExtraOptions } from '../src/layout/sectionSelectorExtraOptions.js';
import { state } from '../src/globe_state.js';

const nouislider = {
	getLink: function () {
		const link = document.createElement('link');
		link.href = '/catalog/view/javascript/podbor/gearbox/gearbox/node_modules/nouislider/dist/nouislider.css';
		link.rel = 'stylesheet';
		document.head.insertAdjacentElement('beforeend', link);
	},
};

nouislider.getLink();

const defalutValue = 'NMRW';
state.setCurrentReductorType(defalutValue);
html_sectionImg.setElemContent(defalutValue);
html_sectionSelectorOutputRpm.setElemContent(defalutValue);
html_sectionSelectorPowerTorque.setElemContent();
html_sectionSelectorReductorRange.setElemContent();
html_sectionSelectorFrameSize.setElemContent();
html_sectionSelectorExtraOptions.setElemContent();

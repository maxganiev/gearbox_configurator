import { state } from '../globe_state.js';

export const html_sectionImg = {
	elem: document.getElementById('section-img'),

	setElemContent: function (dataValue) {
		const imgUrls = [
			['/image/catalog/iblock/005/NMRW/300_3825.jpg'],
			['/image/catalog/iblock/005/R/R.jpg', '/image/catalog/products/gear/R/1.png'],
			['/image/catalog/iblock/005/RC/RC.jpg'],
			['/image/catalog/iblock/005/K/KA.png'],
			['/image/catalog/iblock/005/F/FA_big.jpg'],
			['/image/catalog/iblock/005/DRW/drw.png'],
			['/image/catalog/products/products/gearbox/wormgears/pcrw/pcrw.jpg'],
		];

		const data = state.reductorTypes.reduce((acc, curr, index) => [...acc, { [curr]: imgUrls[index] }], []);
		const found = data.find((item) => Object.keys(item)[0] === dataValue);

		this.sectionImgText = Object.keys(found)[0];
		this.sectionImgArrayOfImgUrls = Object.values(found)[0];

		this.elem.innerHTML = `
		  <h3> Серия редукторов ${this.sectionImgText} </h3>
		  ${this.sectionImgArrayOfImgUrls.map((url) => `<img src="${url}" alt="a reductor photo" />`)}
		  `;
	},
};

export const html_sectionSelectorOutputRpm = {
	elem: document.getElementById('section-selector-output-rpm'),
	input: document.getElementById('input-section-selector-output-rpm'),

	setElemContent: function (dataValue) {
		const percentage = dataValue === 'NMRW' || dataValue === 'DRW' || dataValue === 'PCRW' ? 15 : 10;

		Array.from(this.elem.children)
			.filter((child) => child.tagName === 'SPAN')
			.forEach((child, index) => (child.innerText = index === 0 ? `-${percentage}%` : `+${percentage}%`));

		this.input.removeEventListener('keyup', fireKeyUp);
		this.input.addEventListener('keyup', fireKeyUp);

		const _this = this;

		function fireKeyUp(e) {
			const startValue =
				dataValue === 'NMRW' || dataValue === 'DRW' || dataValue === 'PCRW'
					? Math.floor(Number(e.target.value) * 0.85)
					: Math.floor(Number(e.target.value) * 0.9);
			const endValue =
				dataValue === 'NMRW' || dataValue === 'DRW' || dataValue === 'PCRW'
					? Math.floor(Number(e.target.value) * 1.15)
					: Math.floor(Number(e.target.value) * 1.1);

			const values = [startValue, e.target.value, endValue];

			Array.from(_this.elem.children)
				.filter((child) => child.tagName === 'INPUT')
				.forEach((child, index) => (child.value = values[index]));

			Array.from(_this.elem.children)
				.filter((child) => child.tagName === 'SPAN')
				.forEach((child, index) => (child.innerText = index === 0 ? `-${percentage}%` : `+${percentage}%`));
		}
	},
};

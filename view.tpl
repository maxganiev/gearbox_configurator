<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
			crossorigin="anonymous"
		/>
		<link rel="stylesheet" href="/catalog/view/theme/default/stylesheet/tool/gearbox/gearbox/style.css" />
		<title>Конфигуратор подбора мотор-редукторов</title>
	</head>
	<body>
		<main>
			<nav></nav>
			<!-- IMG section -->
			<section class="section" id="section-img"></section>

			<!--Output RPM selector-->
			<section class="section-selector-output-rpm input-group" id="section-selector-output-rpm">
				<h4>Укажите обороты на выходе</h4>
				<span class="input-group-text extended-visible"></span>
				<input type="number" class="form-control extended-visible" disabled />
				<input type="number" class="form-control" id="input-section-selector-output-rpm" />
				<input type="number" class="form-control extended-visible" disabled />
				<span class="input-group-text extended-visible"></span>
			</section>

			<!-- Emotor power and reductor torque -->
			<section class="section-selector-power-torque" id="section-selector-power-torque">
				<h4>Укажите мощность электродвигателя либо необходимый крутящий момент мотор-редуктора</h4>
				<div class="face-front input-group">
					<div class="div-group">
						<button class="btn btn-lg btn-non-selected" id="btn-section-selector-power-torque-switch-to-torque">
							Перейти к выбору по крутящему моменту (M, H*м)
						</button>
						<label for="checkbox-section-selector-power-torque-check-power-extended">
							Учитывать диапазон мощности
						</label>
						<input type="checkbox" id="checkbox-section-selector-power-torque-check-power-extended" />
						<span class="input-group-text extended-hidden"></span>
						<input type="number" class="form-control extended-hidden" disabled />
						<input type="number" class="form-control" id="input-section-selector-torque" disabled />
						<input type="number" class="form-control extended-hidden" disabled />
						<span class="input-group-text extended-hidden"></span>
					</div>
				</div>
				<div class="face-rear input-group">
					<div class="div-group input-group">
						<button class="btn btn-lg btn-non-selected" id="btn-section-selector-power-torque-switch-to-power">
							Перейти к выбору по мощности (Р, кВт)
						</button>
						<span class="input-group-text extended-visible">-15%</span>
						<input type="number" class="form-control extended-visible" disabled />
						<input type="number" class="form-control" id="input-section-selector-power" disabled />
						<input type="number" class="form-control extended-visible" disabled />
						<span class="input-group-text extended-visible">+15%</span>
					</div>
					<div class="div-range"></div>
				</div>
				<div class="face-right"></div>
				<div class="face-left"></div>
				<div class="face-top"></div>
				<div class="face-bottom"></div>
			</section>

			<!--Reductor range selector-->
			<section class="section-selector-reductor-range" id="section-selector-reductor-range">
				<h4>Укажите сервис-фактор мотор-редуктора (диапазон)</h4>
			</section>

			<!--Frame size selector-->
			<section class="section-selector-framesize" id="section-selector-framesize">
				<h4>Выберите габаритный размер</h4>
				<div class="div-group input-group">
					<label for="checkbox-section-selector-framesize-check-framesize-extended">
						Учитывать диапазон доступных габаритов
					</label>
					<input type="checkbox" id="checkbox-section-selector-framesize-check-framesize-extended" />
					<span class="input-group-text extended-hidden"> -1 </span>
					<input type="text" class="form-control extended-hidden" disabled />
					<input type="text" class="form-control" id="input-section-selector-framezise" disabled />
					<input type="text" class="form-control extended-hidden" disabled />
					<span class="input-group-text extended-hidden"> +1 </span>
				</div>
			</section>

			<!--Additional settings-->
			<section class="section-selector-extra-options" id="section-selector-extra-options">
				<h4>Дополнительные фильтры</h4>
				<label for="checkbox-check-connection-type"> Только "прямая стыковка" </label>
				<input type="checkbox" id="checkbox-section-selector-extra-options-typeof-connection" />
			</section>
		</main>
		<script src="/catalog/view/javascript/podbor/gearbox/gearbox/build/index.js" type="module"></script>
	</body>
</html>

<template>
	<SectionUk class="uk-section-primary uk-text-center">
		<figure class="uk-card uk-card-default uk-padding-small uk-display-inline-block">
			<img src="/img/icon-blendersito.png" alt="Nokidesk" width="60">
		</figure>
		<h1 class="uk-margin-remove">Blendersito</h1>
		<p class="uk-text-lead uk-margin-medium-bottom text-balance">
			Una versión de Blender creada desde cero para Symbian
		</p>
		<a href="https://github.com/Dante-Leoncini/nokidesk" target="_blank" class="uk-button uk-button-default uk-button-large">
			<span uk-icon="icon: github; ratio: 1.5"></span>
			Ver proyecto
		</a>
	</SectionUk>

	<SectionUk class="">
		<div class="uk-grid" uk-grid>
			<aside class="uk-width-1-3@m">
				<table class="uk-table uk-table-divider uk-margin-medium-bottom">
					<thead>
						<tr>
							<th>Table Heading</th>
							<th>Table Heading</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Table Data</td>
							<td>Table Data</td>
						</tr>
						<tr>
							<td>Table Data</td>
							<td>Table Data</td>
						</tr>
						<tr>
							<td>Table Data</td>
							<td>Table Data</td>
						</tr>
					</tbody>
				</table>

				<p uk-margin class="uk-text-bold">
					<a class="uk-button uk-button-default uk-width-full" href="#modal-nokidesk-video-2" uk-toggle>Video 1 (necesita titulo</a>
					<a class="uk-button uk-button-default uk-width-full" href="#modal-nokidesk-video-1" uk-toggle>Video 2 (necesita titulo)</a>
				</p>
			</aside>
			<div class="uk-width-2-3@m">
				<h3>Descipción</h3>
				<p>
					Entorno gráfico liviano para usar aplicaciones QML+Javascript en Multiples Dispositivos.
				</p>
				<p>
					Originalmente creado para usarse en telefonos Nokia con Symbian Belle (Como el Nokia N8). El proyecto tiene muchas horas de trabajo, pero debido a que mi Nokia N8 se rompio, nunca lo termine.
				</p>
				<p>
					Ahora hay una version Compatible con Windows, linux y Android mucho mas avanzada que utiliza QML 2.0 en adelante. permite hacer muchas mas cosas que con QT 4.8 y QML 1.0 no se podia (o al menos no sin mucho esfuerzo)
				</p>
				
				<div uk-margin>
					<img src="/img/nokidesk/img01.jpg" alt="" class="uk-border-rounded">
					<img src="/img/nokidesk/img02.jpg" alt="" class="uk-border-rounded">
				</div>

				<p>
					Adaptar cualquier aplicacion 100% qml y javascript o Aplicaciones Web es relativamente facil. Las aplicaciones tienen que estar en el directorio /qml/aplicaciones y tienen que tener 2 iconos en formato png de 16x16 y 32x32 pixeles llamados "16.png" y "32.png". El Primer QML que se ejecuta tiene que tener el mismo nombre que la carpeta. Ejemplo: "MyApp/MyApp.qml"
				</p>

				<div uk-margin>
					<img src="/img/nokidesk/img03.jpg" alt="" class="uk-border-rounded">
				</div>

				
				<div id="modal-nokidesk-video-1" class="uk-flex-top" uk-modal>
					<div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
						<button class="uk-modal-close-outside" type="button" uk-close></button>
						<iframe src="https://www.youtube-nocookie.com/embed/rpt4CCIYFYc" width="1000" height="562" uk-video uk-responsive></iframe>
					</div>
				</div>

				<div id="modal-nokidesk-video-2" class="uk-flex-top" uk-modal>
					<div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
						<button class="uk-modal-close-outside" type="button" uk-close></button>
						<iframe src="https://www.youtube-nocookie.com/embed/C4aJ_J401Qc" width="1000" height="562" uk-video uk-responsive></iframe>
					</div>
				</div>
			</div>
		</div>
		
	</SectionUk>
</template>
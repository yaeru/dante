<template>
	<SectionUk class="uk-section-primary uk-text-center">
		<figure class="uk-card uk-card-default uk-padding-small uk-display-inline-block">
			<img src="/img/icon-pycrash.png" alt="Nokidesk" width="60">
		</figure>
		<h1 class="uk-margin-remove">PyCrash</h1>
		<p class="uk-text-lead uk-margin-medium-bottom text-balance">
			Merge the textures into a single one ready to use in Unity HDRP
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
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p>
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				
				
				<div class="uk-grid uk-grid-small uk-child-width-1-3 uk-margin-medium-top uk-margin-medium-bottom" uk-grid uk-lightbox>
					<figure>
						<a href="/img/nokidesk/img01.jpg">
							<img src="/img/nokidesk/img01.jpg" alt="Nokidesk ejemplo" class="uk-border-rounded">
						</a>
					</figure>
					<figure>
						<a href="/img/nokidesk/img02.jpg">
							<img src="/img/nokidesk/img02.jpg" alt="Nokidesk ejemplo" class="uk-border-rounded">
						</a>
					</figure>
					<figure>
						<a href="/img/nokidesk/img01.jpg">
							<img src="/img/nokidesk/img01.jpg" alt="Nokidesk ejemplo" class="uk-border-rounded">
						</a>
					</figure>
					<figure>
						<a href="/img/nokidesk/img02.jpg">
							<img src="/img/nokidesk/img02.jpg" alt="Nokidesk ejemplo" class="uk-border-rounded">
						</a>
					</figure>
					<figure>
						<a href="/img/nokidesk/img01.jpg">
							<img src="/img/nokidesk/img01.jpg" alt="Nokidesk ejemplo" class="uk-border-rounded">
						</a>
					</figure>
					<figure>
						<a href="/img/nokidesk/img02.jpg">
							<img src="/img/nokidesk/img02.jpg" alt="Nokidesk ejemplo" class="uk-border-rounded">
						</a>
					</figure>
					
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
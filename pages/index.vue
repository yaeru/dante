<script setup>
	
</script>

<template>
	<SectionUk class="uk-section-primary uk-text-center">
		<span uk-icon="icon: nut; ratio: 4"></span>
		<h1>Dante Leoncini</h1>
		<p class="uk-text-lead uk-margin-medium-bottom text-balance">
			Divulgador de GNU/Linux y Software Libre.<br> Modelador 3D, Diseño Vectorial y Programador
		</p>
		<Social />
	</SectionUk>

	<SectionUk id="projects" class="uk-text-center uk-section-secondar">
		<h2>Proyectos</h2>
		<p class="uk-text-lead uk-margin-medium-bottom">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
		</p>

		<div class="uk-grid uk-child-width-1-2@s uk-child-width-1-4@l uk-grid-match" uk-grid>
			<article>
				<div class="uk-card uk-card-body uk-card-default uk-card-hover">
					<img src="/img/icon-nokidesk.png" alt="Nokidesk" width="60">
					<h3 class="uk-margin-small-top">Nokidesk</h3>
					<p class="uk-text-small text-balance">
						Entorno gráfico personalizable para Mobile, PC y Consolas
					</p>
					<NuxtLink to="/nokidesk" class="uk-button uk-button-default uk-button-small">+ info</NuxtLink>
				</div>
			</article>
			<article>
				<div class="uk-card uk-card-body uk-card-default uk-card-hover">
					<img src="/img/icon-pycrash.png" alt="PyCrash" width="60">
					<h3 class="uk-margin-small-top">PyCrash</h3>
					<p class="uk-text-small text-balance">
						Merge the textures into a single one ready to use in Unity HDRP
					</p>
					<NuxtLink to="/pycrash" class="uk-button uk-button-default uk-button-small">+ info</NuxtLink>
				</div>
			</article>
			<article>
				<div class="uk-card uk-card-body uk-card-default uk-card-hover">
					<img src="/img/icon-blendersito.png" alt="Blendersito" width="60">
					<h3 class="uk-margin-small-top">Blendersito</h3>
					<p class="uk-text-small text-balance">
						Una versión de Blender creada desde cero para Symbian
					</p>
					<NuxtLink to="/blendersito" class="uk-button uk-button-default uk-button-small">+ info</NuxtLink>
				</div>
			</article>
			<article>
				<div class="uk-card uk-card-body uk-card-default uk-card-hover">
					<img src="/img/icon-ludo.png" alt="Ludo Symbian" width="60">
					<h3 class="uk-margin-small-top">Ludo Symbian</h3>
					<p class="uk-text-small text-balance">
						Juego Ludo para Symbian S60v3 con opción multijugador
					</p>
					<NuxtLink to="/ludo" class="uk-button uk-button-default uk-button-small">+ info</NuxtLink>
				</div>
			</article>
		</div>
	</SectionUk>

	<SectionUk id="projects-alt" class="uk-section-secondar">
		<h2 class="uk-text-center">Proyectos</h2>
		<p class="uk-text-center uk-text-lead uk-margin-medium-bottom">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
		</p>

		<div class="uk-grid uk-child-width-1-2@m" uk-grid>
			<article>
				<NuxtLink to="/nokidesk">
					<div class="uk-card uk-card-body uk-card-primary">
						<div class="uk-flex uk-flex-middle">
							<img src="/img/icon-nokidesk.png" alt="Nokidesk" width="60">
							<div class="uk-width-3-4">
								<h3 class="uk-margin-remove">Nokidesk</h3>
								<p class="uk-margin-remove uk-margin-remove-bottom">
									Entorno gráfico personalizable para Mobile, PC y Consolas
								</p>
							</div>
						</div>
					</div>
				</NuxtLink>
			</article>
			<article>
				<NuxtLink to="/nokidesk">
					<div class="uk-card uk-card-body uk-card-primary">
						<div class="uk-flex uk-flex-middle">
							<img src="/img/icon-pycrash.png" alt="PyCrash" width="60">
							<div class="uk-width-3-4">
								<h3 class="uk-margin-remove">PyCrash</h3>
								<p class="uk-margin-remove uk-margin-remove-bottom">
									Merge the textures into a single one ready to use in Unity HDRP
								</p>
							</div>
						</div>
					</div>
				</NuxtLink>
			</article>
			<article>
				<NuxtLink to="/blendersito">
					<div class="uk-card uk-card-body uk-card-primary">
						<div class="uk-flex uk-flex-middle">
							<img src="/img/icon-blendersito.png" alt="Blendersito" width="60">
							<div class="uk-width-3-4">
								<h3 class="uk-margin-remove">Blendersito</h3>
								<p class="uk-margin-remove uk-margin-remove-bottom">
									Una versión de Blender creada desde cero para Symbian
								</p>
							</div>
						</div>
					</div>
				</NuxtLink>
			</article>
			<article>
				<NuxtLink to="/ludo">
					<div class="uk-card uk-card-body uk-card-primary">
						<div class="uk-flex uk-flex-middle">
							<img src="/img/icon-ludo.png" alt="Ludo Symbian" width="60">
							<div class="uk-width-3-4">
								<h3 class="uk-margin-remove">Ludo Symbian</h3>
								<p class="uk-margin-remove uk-margin-remove-bottom">
									Juego Ludo para Symbian S60v3 con opción multijugador
								</p>
							</div>
						</div>
					</div>
				</NuxtLink>
			</article>
		</div>
	</SectionUk>
</template>

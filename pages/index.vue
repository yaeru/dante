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

	<SectionUk class="uk-text-center">
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
					<span uk-icon="icon: nut; ratio: 3" class="uk-text-danger"></span>
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
					<span uk-icon="icon: nut; ratio: 3" class="uk-text-danger"></span>
					<h3 class="uk-margin-small-top">Ludo Symbian</h3>
					<p class="uk-text-small text-balance">
						Juego Ludo para Symbian S60v3 con opción multijugador
					</p>
					<NuxtLink to="/ludo" class="uk-button uk-button-default uk-button-small">+ info</NuxtLink>
				</div>
			</article>
		</div>
	</SectionUk>
</template>

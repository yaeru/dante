<script setup lang="ts">
</script>

<template>
	<Navbar />
	
	<div>
		<slot />
	</div>

	<Donations />
	<!-- <Contact /> -->
	
	<footer class="uk-padding uk-text-center">
		<div class="uk-container uk-container-large uk-text-small">

			<Social />
			<p class="uk-margin-small-bottom">
				<a href="#">info@contacto.com</a> - <a href="#">Legales</a>
			</p>
			<p class="uk-margin-remove">© {{ new Date().getFullYear() }} - Todos los derechos reservados.<br> Web desarrollada por <a href="https://www.quierohacertuweb.com/" target="_blank">Yael Duckwen</a>.</p>
		</div>
	</footer>
</template>
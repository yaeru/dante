<script setup lang="ts">
	const { pending, data: places } = await useFetch('http://localhost/tienda/wordpress/wp-json/geodir/v2/places', {
		lazy: true,
		transform: (places) => {
			return places.map(place => ({ id: place.id, title: place.title.raw, extracto: place.descripcin_corta, city: place.city, image: place.featured_image.src, category: place.post_category }))
		}
	})
</script>

<template>
	<h1>Listado</h1>
	
	<div v-if="pending">
		Loading ...
	</div>

	<div v-else>
		<div uk-margin>
			<article v-for="place in places" :key="place.id">
				<div class="uk-grid">
					<div class="uk-width-1-3@m">
						<img :src="place.image" class="uk-border-rounded" width="100%">
					</div>
					<div class="uk-width-2-3@m">
						<h2>{{ place.title }}</h2>
						<p class="uk-text-muted">
							🗺 {{ place.city }} |
							📂 <span v-for="category in place.category" :key="category.id" class="uk-list">
								<span>• {{ category.name }}</span>
							</span>
						</p>
						<p v-if="place.extracto">{{ place.extracto }}</p>
						<p v-else>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<NuxtLink :to="'/places/' + place.id" class="uk-button uk-button-primary">Ver</NuxtLink>
					</div>
				</div>
			</article>
		</div>

		<!-- <pre>
			{{ places }}
		</pre> -->
	</div>
</template>
<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import { useRoute } from 'vue-router';

	const route = useRoute();
	const idParam = parseInt(route.params.id);

	const { pending, data } = await useFetch('http://localhost/tienda/wordpress/wp-json/geodir/v2/places', {
		lazy: true,
		transform: (places) => {
			return places.map(place => ({ id: place.id, title: place.title.raw, content: place.content.rendered, extracto: place.descripcin_corta, city: place.city, latitude: place.latitude, longitude: place.longitude, image: place.featured_image.src, category: place.post_category }))
		}
	})

	const place = data.value.find(place => place.id === idParam) || {};

</script>


<template>
	<div v-if="pending">
		Loading ...
	</div>

	<div v-else>
		<div class="uk-grid" uk-grid>
			<div class="uk-width-1-3@m">
				<img :src="place.image" class="uk-border-rounded uk-margin-bottom" width="100%">

				<iframe :src="'https://maps.google.com/maps?q=' + place.latitude + ',' + place.longitude + '&hl=es;z=14&amp;output=embed'" width="100%" height="400" class="uk-border-rounded uk-card-default uk-card uk-card-body uk-card-small"></iframe>
			</div>
			<div class="uk-width-2-3@m">
				<h1>{{ place.title || 'No encontrado' }}</h1>
				<p class="uk-text-muted">
					🗺 {{ place.city }} |
					📂 <span v-for="category in place.category" :key="category.id" class="uk-list">
						<span>• {{ category.name }}</span>
					</span>
				</p>

				<p class="uk-text-lead" v-if="place.extracto">{{ place.extracto }}</p>

				<div v-html="place.content"></div>
			</div>
		</div>
		

		<!-- <pre v-if="place">
			{{ place }}
		</pre> -->
	</div>
</template>

<template>
	<div class="home">
		<v-carousel hide-delimiters :touch="true" :cycle="false" height="100vh" class="carousel">
			<v-carousel-item v-for="(slide,i) in slides" :key="i" :class="slide.class" :src="slide.src">
				<v-layout justify-center align-center fill-height>
					<div class="text-xs-center">
						<div>{{ slide.title }}</div>
						<div>{{ slide.desc }}</div>
					</div>
				</v-layout>
			</v-carousel-item>
		</v-carousel>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data () {
			return {
				slides: [
				{
					title: 'Intro',
					desc: 'Intro description',
					class: 'intro',
					src: '@/assets/img/slides/',
				},
				{
					title: 'Day 1',
					desc: 'Day 1 description',
					class: 'day day1',
					src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
				},
				{
					title: 'Sky',
					desc: 'sky desc',
					class: 'sky',
					src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
				}
				]
			}
		}
	}
</script>

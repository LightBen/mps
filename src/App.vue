<template>
	<v-app>
		<v-toolbar app fixed class="transparent">
			<v-toolbar-title class="headline text-uppercase">
				<span>MPS</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
				<v-icon v-text="platform"></v-icon>
			</v-btn>
		</v-toolbar>

		<v-content class="pa-0">
		    <router-view/>
		</v-content>
	
		<v-footer fixed height="auto" color="transparent">
			<v-card class="flex transparent" flat tile>
				<v-card-title>
					<strong class="subheading">Placeholder</strong>
					<v-spacer></v-spacer>
					&copy;2018 — <strong>MPS</strong>
					<v-spacer></v-spacer>
					<strong class="subheading">Placeholder</strong>
				</v-card-title>
			</v-card>
		</v-footer>
	</v-app>
</template>

<script>
	export default {
		name: 'App',
		data () {
			return {
	        	//
			}
		}
	}
</script>

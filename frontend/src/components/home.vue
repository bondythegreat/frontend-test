<template>
	<div class="container">
		<filter-section />
		<cards-list />
	</div>
</template>

<script>
	import CardsList from './CardsList'
	import FilterSection from './FilterSection'

	export default {
		name: 'home',
		components: {
			CardsList,
			FilterSection,
		}
	}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<template>
	<div class="filter-container">
		<div class="row-blocks">
			<div class="block-6 block-first">
				 <multiselect
			 		v-model="location"
			 		:options="locationOptions"
			 		:multiple="true"
					:close-on-select="false"
					:clear-on-select="false"
					:preserve-search="true"
					:searchable="false"
					class="multipleselector"
			 		placeholder="Area" v-if="locationOptions">
			 		<template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length && !isOpen">Area: {{ values.length }} selected</span></template>
			 	</multiselect>
				<multiselect
					v-model="budget"
					:options="budgetOptions"
					:searchable="false"
					placeholder="Budget">
				</multiselect>
			</div>
			<div class="block-6 block-second right">
				<label for="sort">Sort By</label>
				<multiselect
					v-model="sort"
					deselect-label="Can't remove this value"
					placeholder="Select one"
					:options="sortOptions"
					:searchable="false"
					:allow-empty="false">
				</multiselect>
				<button type="button" class="trvlr-primary-btn-outline big btn-map" @click="viewMap" :class="isMap ? `active` : ``">{{labelButtonMap}}</button>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import Multiselect from 'vue-multiselect'

	export default {
		data () {
			return {
				location: null,
				budget: null,
				sort: null,
				locationOptions: ['Bali', 'Kuta', 'Seminyak', 'Canggu'],
				budgetOptions: ['less than 300,000 IDR', '300,000-500,000 IDR', 'more than 500,000 IDR'],
				sortOptions: ['Most Popular', 'Less Popular']
			}
		},
		mounted() {
			this.getAreas();
		},
		watch: {
			location(val) {
				this.$store.commit('addAreas', val);
			},
			budget(val) {
				this.$store.commit('addBudget', val);
			},
			sort(val) {
				this.$store.commit('addSort', val);
			}
		},
		computed: {
			isMap() {
				return this.$store.getters.isMapView
			},
			labelButtonMap() {
				return this.isMap ? 'Hide Map' : 'See Map'
			}
		},
		methods: {
			getAreas() {
				axios
				    .get('/data/areas.json')
				    .then(response => {
				    	this.locationOptions = response.data;
				    })
			},
			viewMap() {
				this.$store.commit('toggleMap')
				if(this.isMap) {
					this.$router.push('/map')
				} else {
					this.$router.push('/')
				}

			}
		},
		components: {
			Multiselect
		}
	}
</script>
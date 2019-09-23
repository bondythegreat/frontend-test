<template>
	<div>
		<div class="container">
			<filter-section />
		</div>
		<GmapMap class="map" ref="map" :class="isInfoWindowOpen ? `opened`: ``" v-bind:center="center" v-bind:zoom="2" v-bind:options="mapOptions">
			<GmapMarker
			    :key="index"
			    v-for="(m, index) in renderedItems"
			    :position="m.position"
			    :clickable="true"
			    :draggable="true"
			    :icon="{ url: require('../assets/marker.svg')}"
			    @click="showDetail(m, index)"
			  />
			<gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="isInfoWindowOpen" @closeclick="infoWinOpen=false">
		        <div v-html="infoContent" />
		    </gmap-info-window>
		</GmapMap>
	</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import FilterSection from './FilterSection'
	import * as VueGoogleMaps from "vue2-google-maps"

	export default {
		name: 'map',
		data() {
			return {
				mapOptions: {
			        disableDefaultUI: true,
			        styles: [{
			          featureType: 'poi.business',
			          stylers: [{ visibility: 'off' }]
			        }]
			    },
			    isInfoWindowOpen: false,
			    infoContent: '',
			    currentMidx: null,
			    infoWindowPos: null,
			    infoOptions: {
		            pixelOffset: {
		              width: 0,
		              height: -35
		            }
		        },
			    center: {lat:10, lng:10},
			    markers: [],
			    total: 0
			}
		},
		computed: {
			filterArea() {
				// remove bali from filter because it means show all
				return this.$store.getters.getAreas.filter(item => item.toLowerCase() != 'bali')
			},
			filterBudget() {
				return this.$store.getters.getBudget
			},
			filterSort() {
				return this.$store.getters.getSort
			},
			renderedItems() {
				let newItemsList = this.markers;

				// filter
				newItemsList = newItemsList.filter(item => {
					if (this.filterArea.length == 0 || this.filterArea.includes(item.location)) {
						return item;
					}
				})
				return newItemsList
			}
		},
		mounted() {
			this.getAllCards();
		},
		methods: {
			getAllCards() {
				axios
				    .get('/data/resto.json')
				    .then(response => {
				    	this.markers = response.data.map(item => {
				    		item.position = {
				    			lat: parseInt(item.latitude),
				    			lng: parseInt(item.longitude)
				    		}
				    		return item
				    	});
				    	this.total = this.markers.length;
				    })
			},
			showDetail(marker, idx) {
	            this.infoWindowPos = marker.position;
	            this.infoContent = '<div class="infowindow-img-container">';
	            this.infoContent +='		<img src="'+marker.picture+'" /></div>';
	            this.infoContent +='			<h2>'+marker.name+'</h2>';
	            this.infoContent +='            <div class="location">'+marker.location+'</div>';
	            this.infoContent +=            '<p>This is description, need API to provide this prop</p>';
	            //check if its the same marker that was selected if yes toggle
	            if (this.currentMidx == idx) {
	              this.isInfoWindowOpen = !this.isInfoWindowOpen;
	            }
	            //if different marker set infowindow to open and reset current marker index
	            else {
	              this.isInfoWindowOpen = true;
	              this.currentMidx = idx;
	            }
	        }
		},
		components: {
			FilterSection
		}
	}
</script>



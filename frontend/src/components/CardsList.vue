<template>
	<div>
		<div class="row-blocks cards-container">
			<div class="block-4" v-for="item in renderedItems">
				<card-item :item="item" />
			</div>
		</div>
		<paginate
		  class="desktop"
		  :page-count="totalPage"
		  :click-handler="returnPageNumber"
		  :prev-text="'<'"
		  :next-text="'>'"
		  :container-class="'pagination right'">
		</paginate>
		<button class="trvlr-primary-btn-outline mobile big block" @click="loadMore">Load More</button>
	</div>
</template>

<script>
	import axios from 'axios'
	import CardItem from './CardItem'
	import Paginate from 'vuejs-paginate'

	export default {
		data() {
			return {
				currpage: 1,
				perPage: 18,
				total: null,
				items: []
			}
		},
		mounted() {
			this.getAllCards();
		},
		computed: {
			totalPage() {
				let thetotalpage = 1;
				if(this.total) {
					thetotalpage = Math.ceil(this.total/this.perPage)
				}
				return thetotalpage;
			},
			renderedItems() {
				let newItemsList = this.items;

				// filter
				newItemsList = newItemsList.filter(item => {
					if (this.filterArea.length == 0 || this.filterArea.includes(item.location)) {
						return item;
					}
				})

				// TODO: you can imagine for other filters here

				this.total = newItemsList.length;
				//pagination
				newItemsList = newItemsList.slice((this.currpage-1) * this.perPage, (this.currpage) * this.perPage);

				return newItemsList

			},
			filterArea() {
				// remove bali from filter because it means show all
				return this.$store.getters.getAreas.filter(item => item.toLowerCase() != 'bali')
			},
			filterBudget() {
				return this.$store.getters.getBudget
			},
			filterSort() {
				return this.$store.getters.getSort
			}

		},
		methods: {
			getAllCards() {
				axios
				    .get('/data/resto.json')
				    .then(response => {
				    	this.items = response.data;
				    	this.total = this.items.length;
				    })
			},
			returnPageNumber(pagenum) {
				this.currpage = pagenum;
			},
			loadMore() {
				//todo
				console.log('todo')
			}
		},
		components: {
			CardItem,
			Paginate
		}
	}
</script>
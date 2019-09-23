<template>
	<div class="card-item">
		<a href="/detail">
			<div class="image-container" :style="{ backgroundImage: 'url(' + item.picture + ')' }">
				<div class="discount-text">{{item.discountText}}</div>
			</div>
			<div class="text-container">
				<!-- should be in json return value from API. but this one is just to show how to present it in html -->
				<h2>{{item.discountText}} {{item.name}}</h2>
				<div class="display-table">
					<div class="location-container">
						<h3 class="resto-name">{{item.name}}</h3>
						<div class="location">{{item.location}}</div>
					</div>
					<div class="price-container right">
						<div>from</div>
						<div class="price">AU${{item.price}}</div>
					</div>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		props: ['item'],
		data: function() {
			return {

			}
		},
		components: {

		}
	}
</script>
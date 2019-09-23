<template>
	<div id="app">
		<header-section />

	    <search-section />

	    <div class="category-container bg-white">
	    	<div class="container">
	    		<div class="row-blocks">
	    			<div class="block-12">
	    				<ul class="category-list list-unstyled">
		    				<li><a href="">All Deals</a></li>
		    				<li><a href="">Eat &amp; Drink</a></li>
		    				<li class="active"><a href="">Things To Do</a></li>
		    				<li><a href="">Accomodation</a></li>
		    				<li><a href="">Bars &amp; Clubs</a></li>
		    				<li><a href="">Health &amp; Beauty</a></li>
		    				<li class="has-children"><a href="">More</a></li>
		    			</ul>
	    			</div>
	    		</div>
	    	</div>
	    </div>

	    <div class="main-container">
			<router-view />
	    </div>


	    <footer-section />
	</div>
</template>

<script>
import HeaderSection from './components/HeaderSection'
import SearchSection from './components/SearchSection'
import FooterSection from './components/FooterSection'

export default {
  name: 'app',
  components: {
  	HeaderSection,
  	SearchSection,
  	FooterSection
  }
}
</script>


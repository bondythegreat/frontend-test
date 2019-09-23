<template>
	<footer class="bg-teal">
    	<div class="container">
    		<div class="row-blocks">
	    		<div class="block-4 with-border">
	    			<h3>Explore by location</h3>
	    			<div class="list-menu">
	    				<div class="group">
	    					<ul class="list-unstyled">
	    						<li><a href="">Seminyak</a></li>
	    						<li><a href="">Legian</a></li>
	    						<li><a href="">Uluwatu</a></li>
	    						<li><a href="">The Gili Islands</a></li>
	    						<li><a href="">Kuta</a></li>
	    					</ul>
	    				</div>
	    				<div class="group">
	    					<ul class="list-unstyled">
	    						<li><a href="">Jimbaran</a></li>
	    						<li><a href="">Canggu</a></li>
	    						<li><a href="">Ubud</a></li>
	    						<li><a href="">North Bali</a></li>
	    						<li><a href="">Glogor Carik</a></li>
	    					</ul>
	    				</div>
		    		</div>

		    		<hr class="mobile">
		    	</div>
	    		<div class="block-4 with-border">
	    			<h3>Other Stuff</h3>
	    			<div class="list-menu">
	    				<div class="group">
	    					<ul class="list-unstyled">
	    						<li><a href="">Advertise with us</a></li>
	    						<li><a href="">Our blog</a></li>
	    						<li><a href="">Contact us</a></li>
	    						<li><a href="">Privacy Policy</a></li>
	    						<li><a href="">Terms</a></li>
	    					</ul>
	    				</div>
	    				<div class="group">
	    					<ul class="list-unstyled">
	    						<li><a href="">Claim yout listing</a></li>
	    						<li><a href="">Manage Booking</a></li>
	    						<li><a href="">DMCA</a></li>
	    						<li><a href="">Refund Policy</a></li>
	    					</ul>
	    				</div>
	    			</div>

	    			<hr class="mobile">
	    		</div>
	    		<div class="block-4">
	    			<h3>Subscribe</h3>
	    			<p>To get the latest deals, news & more</p>
	    			<div class="form-subscribe">
	    				<div class="text-field-container">
	    					<input type="text" name="email" placeholder="Add your email" />
	    				</div>
	    				<div class="button-container">
	    					<button type="submit" class="button-inline">Subscribe</button>
	    				</div>
	    			</div>
	    			<div class="social-media-container">
	    				<ul class="list-unstyled">
	    					<li><a href="http://www.facebook.com"><img src="~@/assets/icon-fb.svg" height="15" /></a></li>
	    					<li><a href="http://www.instagram.com"><img src="~@/assets/icon-ig.svg" height="15" /></a></li>
	    				</ul>
	    			</div>
	    		</div>
    		</div>
    		<hr />
    	</div>

    	<div class="container">
    		<div class="row-blocks">
    			<div class="block-8">
    				<div class="copyright-container">
    					<div class="logo-container">
    						<img src="~@/assets/logo-white.svg" alt="logo" width="160" />
    					</div>
    					<div class="logo-atas-container">
    						<img src="~@/assets/logo-atas.png" alt="logo atas" />
    					</div>
    					<div class="text-container">
    						The Bali Bible is a part of TRAVLR GROUP <br />
    						&copy; 2019 TRAVLR Pty Ltd All Right Reserved
    					</div>
    				</div>
    			</div>
    			<div class="block-4 right">
    				<multiselect v-model="currency" :options="currencyOptions"></multiselect>
    			</div>
    		</div>
    	</div>
    </footer>
</template>

<script>
	import Multiselect from 'vue-multiselect'
	export default {
		data: function() {
			return {
				currency: '$ AUD',
				currencyOptions: ['$ AUD', 'Rp IDR', '$ SGD']
			}
		},
		components: {
			Multiselect
		}
	}
</script>
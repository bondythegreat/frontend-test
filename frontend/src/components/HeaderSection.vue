<template>
	<header class="bg-white">
		<div class="container">
			<div class="row-blocks">
				<div class="block-12">
			  		<nav class="navbar">
			  			<button class="navbar-toggler" type="button">
					    	<img src="~@/assets/icon-burger.svg" width="18" />
					  	</button>
				        <router-link to='/' class="navbar-brand">
				        	<img src="~@/assets/logo-dark.svg" alt="bali bible" width="150" height="50" />
				        </router-link>
				        <div class="collapse navbar-collapse">
				        	<ul class="navbar-nav list-unstyled">
				        		<li class="navbar-item"><a class="nav-link" href="#">Inspiration</a></li>
				        		<li class="navbar-item"><a class="nav-link" href="#">Explore</a></li>
				        		<li class="navbar-item"><a class="nav-link" href="#">Destination</a></li>
				        		<li class="navbar-item"><a class="nav-link" href="#">Book</a></li>
				        	</ul>

					        <div class="login-container">
						        <form class="form-inline">
								    <input class="form-control mr-sm-2 search-input" type="search" placeholder="Search" aria-label="Search" />
								</form>

								<a href="#" class="nav-link align-self-center">Login</a>
								<button class="btn btn-success trvlr-primary-btn my-2 btn-sm" type="submit">Sign up</button>
							</div>
				        </div>
			    	</nav>
			    </div>
			</div>
	    </div>
	</header>
</template>

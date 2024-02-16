<template>
	<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
		<nav class="uk-navbar-container">
			<div class="uk-container uk-container-large">
				<div class="uk-navbar" uk-navbar>
					<div class="uk-navbar-left">
						<NuxtLink to="/" class="uk-logo uk-text-bold">Untitled</NuxtLink>
					</div>
					<div class="uk-navbar-center">
						<ul class="uk-navbar-nav uk-visible@m">
							<li>
								<NuxtLink to="/">Inicio</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/nokidesk">Nokidesk</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/pycrash">PyCrash</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/blendersito">Blendersito</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/ludo">Ludo</NuxtLink>
							</li>
							<li>
								<NuxtLink to="/contacto">Contacto</NuxtLink>
							</li>
						</ul>		
					</div>
					<div class="uk-navbar-right">
						<ul class="uk-navbar-nav">
							<li><a href="https://www.youtube.com/c/dante_leoncini" target="_blank" uk-icon="icon: youtube"></a></li>
							<li><a href="https://instagram.com/dante_leoncini" target="_blank" uk-icon="icon: instagram"></a></li>
							<li><a href="https://twitter.com/dante_leoncini" target="_blank" uk-icon="icon: twitter"></a></li>
							<li><a href="https://github.com/Dante-Leoncini" target="_blank" uk-icon="icon: github"></a></li>
							<li class="uk-hidden@m">
								<button class="uk-navbar-toggle" type="button" uk-navbar-toggle-icon uk-toggle="target: #offcanvas-nav"></button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	</div>

	<!-- This is the off-canvas -->
	<div id="offcanvas-nav" uk-offcanvas="overlay: true; flip: true">
		<div class="uk-offcanvas-bar uk-flex uk-flex-column">
			<button class="uk-offcanvas-close" type="button" uk-close></button>
			<ul class="uk-nav uk-nav-primary uk-margin-auto-vertical">
				<li>
					<NuxtLink to="/">Inicio</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/nokidesk">Nokidesk</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/pycrash">PyCrash</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/blendersito">Blendersito</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/ludo">Ludo</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>
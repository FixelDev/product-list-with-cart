<script>
	import Product from '$lib/components/Product.svelte';
</script>

<main>
	<div class="container">
		<h1 class="title">Desserts</h1>

		<section class="products-section">
			<Product />
		</section>
	</div>
</main>

<style>
	.container {
		max-width: 1440px;
		margin: 0 auto;
		padding: 1.5em 1.2em;
	}
</style>

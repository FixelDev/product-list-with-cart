<script lang="ts">
	import Product from '$lib/components/Product.svelte';
	import type { ProductType } from '\$lib/types';
	import productsData from '$lib/assets/data.json';
	import Cart from '$lib/components/Cart.svelte';

	let products: ProductType[] = $state([...productsData]);
</script>

<main>
	<div class="container">
		<h2 class="title heading-big">Desserts</h2>

		<section class="products-section">
			{#each products as product (product.name)}
				<Product
					image={product.image}
					name={product.name}
					category={product.category}
					price={product.price}
				/>
			{/each}
		</section>

		<section class="cart-section">
			<Cart />
		</section>
	</div>
</main>

<style>
	.title {
		margin-bottom: 0.8em;
	}

	.container {
		max-width: 1440px;
		margin: 0 auto;
		padding: 1.5em;
	}

	.products-section {
		margin-bottom: 2em;
	}
</style>

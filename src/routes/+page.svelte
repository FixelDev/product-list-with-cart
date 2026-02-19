<script lang="ts">
	import Product from '$lib/components/Product.svelte';
	import type { ProductType, ProductInCartType } from '\$lib/types';
	import productsData from '$lib/assets/data.json';
	import Cart from '$lib/components/Cart.svelte';

	const products: ProductType[] = [...productsData];

	let productsInCart: ProductInCartType[] = $state([]);

	function addToCart(productToAdd: ProductType): void {
		const newProduct: ProductInCartType = {
			id: productToAdd.id,
			name: productToAdd.name,
			quantity: 1,
			price: productToAdd.price
		};

		productsInCart.push(newProduct);
		//TODO: Add check if product is already added and throw exception
	}

	function incrementQuantity(id: number): void {
		changeQuantityBy(id, 1);
	}

	function decrementQuantity(id: number): void {
		changeQuantityBy(id, -1);
	}

	function changeQuantityBy(id: number, changeBy: number): void {
		const foundProduct: ProductInCartType | undefined = productsInCart.find(
			(product) => product.id === id
		);

		if (foundProduct !== undefined) {
			foundProduct.quantity += changeBy;
		} else {
			//TODO Throw exception
		}
	}

	function isInCart(id: number): boolean {
		return productsInCart.some((product) => product.id === id);
	}

	function getQuantity(id: number): number {
		const foundProduct: ProductInCartType | undefined = productsInCart.find(
			(product) => product.id === id
		);

		if (foundProduct !== undefined) {
			return foundProduct.quantity;
		}

		return 0;
	}

	$inspect(productsInCart);
</script>

<main>
	<div class="container">
		<h2 class="title heading-big">Desserts</h2>

		<section class="products-section">
			{#each products as product (product.id)}
				<Product
					id={product.id}
					image={product.image}
					name={product.name}
					category={product.category}
					price={product.price}
					quantity={getQuantity(product.id)}
					onAddToCart={() => addToCart(product)}
					{isInCart}
					onIncrementQuantity={incrementQuantity}
					onDecrementQuantity={decrementQuantity}
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

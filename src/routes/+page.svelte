<script lang="ts">
	import Product from '$lib/components/Product.svelte';
	import type { ProductType, ProductInCartType, FilterType } from '\$lib/types';
	import productsData from '$lib/assets/data.json';
	import Cart from '$lib/components/Cart.svelte';
	import OrderConfirmation from '$lib/components/OrderConfirmation.svelte';
	import FilterButton from '$lib/components/FilterButton.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';

	const products: ProductType[] = [...productsData];
	const allCategories: string[] = products.map((product) => product.category);
	const uniqueCategories: Set<string> = new Set(allCategories);

	let productsInCart: ProductInCartType[] = $state([]);
	let isOrderFinished: boolean = $state(false);

	let filters: FilterType[] = $state(
		Array.from(uniqueCategories).map((category) => ({ name: category, isActive: false }))
	);
	let activeFilters: string[] = $derived(
		filters.filter((filter) => filter.isActive).map((filter) => filter.name)
	);
	let searchQuery: string = $state('');

	$inspect(productsInCart);
	$inspect(filters);
	$inspect(searchQuery);

	let orderTotalValue: number = $derived(
		productsInCart.reduce(
			(accumulator, currentProduct) =>
				accumulator + currentProduct.price * currentProduct.quantity,
			0
		)
	);

	function addToCart(productToAdd: ProductType): void {
		if (isInCart(productToAdd.id)) {
			return;
		}

		const newProduct: ProductInCartType = {
			id: productToAdd.id,
			name: productToAdd.name,
			quantity: 1,
			price: productToAdd.price,
			thumbnail: productToAdd.image.thumbnail
		};

		productsInCart.push(newProduct);
	}

	function removeFromCart(id: number): void {
		const foundProduct: ProductInCartType | undefined = getProductFromCartById(id);

		if (foundProduct !== undefined) {
			const productIndex: number = productsInCart.indexOf(foundProduct);
			productsInCart.splice(productIndex, 1);
		}
	}

	function getProductFromCartById(id: number): ProductInCartType | undefined {
		const foundProduct: ProductInCartType | undefined = productsInCart.find(
			(product) => product.id === id
		);

		return foundProduct;
	}

	function incrementQuantity(id: number): void {
		if (getQuantity(id) < 20) {
			changeQuantityBy(id, 1);
		}
	}

	function decrementQuantity(id: number): void {
		changeQuantityBy(id, -1);

		if (getQuantity(id) <= 0) {
			removeFromCart(id);
		}
	}

	function changeQuantityBy(id: number, changeBy: number): void {
		const foundProduct: ProductInCartType | undefined = getProductFromCartById(id);

		if (foundProduct !== undefined) {
			foundProduct.quantity += changeBy;
		}
	}

	function isInCart(id: number): boolean {
		return productsInCart.some((product) => product.id === id);
	}

	function getQuantity(id: number): number {
		const foundProduct: ProductInCartType | undefined = getProductFromCartById(id);

		if (foundProduct !== undefined) {
			return foundProduct.quantity;
		}

		return 0;
	}

	function startNewOrder(): void {
		productsInCart = [];
		filters = filters.map((filter) => ({ name: filter.name, isActive: false }));
		searchQuery = '';
		isOrderFinished = false;
	}

	function checkIfCategoryMatchesFilters(category: string): boolean {
		return activeFilters.length === 0 || activeFilters.includes(category);
	}

	function checkIfNameMatchesSearchQuery(name: string): boolean {
		return searchQuery.length === 0 || name.toLowerCase().includes(searchQuery.toLowerCase());
	}
</script>

<main>
	<div class="container">
		<section class="products-section">
			<h2 class="title heading-big">Desserts</h2>

			<div class="filters">
				{#each filters as filter}
					<FilterButton name={filter.name} bind:isActive={filter.isActive} />
				{/each}
			</div>

			<SearchBar bind:searchQuery />

			<div class="products-grid">
				{#each products as product (product.id)}
					{#if checkIfCategoryMatchesFilters(product.category) && checkIfNameMatchesSearchQuery(product.name)}
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
					{/if}
				{/each}
			</div>
		</section>

		<section class="cart-section">
			<Cart
				products={productsInCart}
				onRemoveFromCart={removeFromCart}
				onOrderConfirmed={() => (isOrderFinished = true)}
				{orderTotalValue}
			/>
		</section>
	</div>
	{#if isOrderFinished}
		<OrderConfirmation
			products={productsInCart}
			{orderTotalValue}
			onStartNewOrder={startNewOrder}
		/>
	{/if}
</main>

<style>
	main {
		position: relative;
	}

	.title {
		margin-bottom: 0.8em;
	}

	.container {
		max-width: 1216px;
		margin: 0 auto;
		padding: 1.5em;
	}

	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 0.2em;
		margin-bottom: 2em;
	}

	.products-section {
		margin-bottom: 2em;
	}

	.products-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		grid-gap: 1.5em 1.5em;
	}

	@media (min-width: 768px) {
		.products-grid {
			grid-gap: 2em 1.5em;
		}
	}

	@media (min-width: 1000px) {
		.container {
			display: flex;
			justify-content: space-between;
			gap: 2em;
		}

		.products-section {
			width: 100%;
		}

		.cart-section {
			min-width: 384px;
			position: relative;
		}
	}
</style>

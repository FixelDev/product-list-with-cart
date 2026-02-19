<script lang="ts">
	import emptyCartImage from '$lib/assets/images/illustration-empty-cart.svg';
	import CartItem from '$lib/components/CartItem.svelte';
	import carbonNeutralDeliveryIcon from '$lib/assets/images/icon-carbon-neutral.svg';
	import type { ProductInCartType } from '$lib/types';

	interface Props {
		products: ProductInCartType[];
		onRemoveFromCart: (id: number) => void;
	}

	function getOrderTotalValue(): number {
		const totalValue = products.reduce(
			(accumulator, currentProduct) =>
				accumulator + currentProduct.price * currentProduct.quantity,
			0
		);

		return totalValue;
	}

	let { products, onRemoveFromCart }: Props = $props();
</script>

<div class="cart">
	<h2 class="title heading">Your Cart (0)</h2>

	{#if products.length > 0}
		<div class="filled-cart-container">
			<div class="cart-items">
				{#each products as product (product.id)}
					<CartItem
						name={product.name}
						quantity={product.quantity}
						price={product.price}
						onRemoveFromCart={() => onRemoveFromCart(product.id)}
					/>
				{/each}
			</div>
			<div class="order-summary">
				<p class="text-lead">Order Total</p>
				<b class="heading">${getOrderTotalValue().toFixed(2)}</b>
			</div>
			<div class="order-delivery-carbon-neutral-info">
				<img src={carbonNeutralDeliveryIcon} alt="Carbon neutral delivery icon" />
				<p class="text-lead">
					This is a <b class="text-lead-bold">carbon-neutral</b> delivery
				</p>
			</div>
			<button class="btn confirm-order-btn text-bold">Confirm Order</button>
		</div>
	{:else}
		<div class="empty-cart-container">
			<img src={emptyCartImage} alt="Empty cart image" class="empty-cart-img" />
			<p class="lead text-lead-bold">Your added items will appear here</p>
		</div>
	{/if}
</div>

<style>
	.cart {
		background-color: var(--white);
		border-radius: 0.75em;
		padding: 1.5em;
	}

	.title {
		color: var(--red);
		margin-bottom: 1em;
	}

	.empty-cart-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.empty-cart-img {
		margin-bottom: 1em;
	}

	.lead {
		color: var(--rose-500);
	}

	.cart-items {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.order-summary {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 1.5em 0;
	}

	.order-delivery-carbon-neutral-info {
		background-color: var(--rose-50);
		border-radius: 1em;
		display: flex;
		gap: 1em;
		justify-content: center;
		align-items: center;
		padding: 1em;
		margin-bottom: 1.5em;
	}

	/*.confirm-order-btn {*/
	/*	width: 100%;*/
	/*	border: none;*/
	/*	outline: none;*/
	/*	background-color: var(--red);*/
	/*	color: var(--white);*/
	/*	padding: 1em;*/
	/*	border-radius: var(--pill);*/
	/*}*/

	/*.confirm-order-btn:hover,*/
	/*.confirm-order-btn:focus {*/
	/*	cursor: pointer;*/
	/*	background-color: hsl(from var(--red) h s calc(l - 10));*/
	/*}*/

	/*.confirm-order-btn:active {*/
	/*	transform: scale(var(--btn-clicked-scale));*/
	/*}*/
</style>

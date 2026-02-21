<script lang="ts">
	import emptyCartImage from '$lib/assets/images/illustration-empty-cart.svg';
	import CartItem from '$lib/components/CartItem.svelte';
	import carbonNeutralDeliveryIcon from '$lib/assets/images/icon-carbon-neutral.svg';
	import type { ProductInCartType } from '$lib/types';
	import { slide } from 'svelte/transition';

	interface Props {
		products: ProductInCartType[];
		onRemoveFromCart: (id: number) => void;
		onOrderConfirmed: () => void;
		orderTotalValue: number;
	}
	let { products, onRemoveFromCart, onOrderConfirmed, orderTotalValue }: Props = $props();
</script>

<div class="cart">
	<h2 class="title heading">Your Cart ({products.length})</h2>

	{#if products.length > 0}
		<div class="filled-cart-container">
			<div class="scrollable-list">
				<div class="cart-items">
					{#each products as product (product.id)}
						<div class="wrapper" transition:slide={{ duration: 300 }}>
							<CartItem
								name={product.name}
								quantity={product.quantity}
								price={product.price}
								onRemoveFromCart={() => onRemoveFromCart(product.id)}
							/>
						</div>
					{/each}
				</div>
			</div>

			<div class="order-summary">
				<p class="text-lead">Order Total</p>
				<b class="heading">${orderTotalValue.toFixed(2)}</b>
			</div>
			<div class="order-delivery-carbon-neutral-info">
				<img src={carbonNeutralDeliveryIcon} alt="Carbon neutral delivery icon" />
				<p class="text-lead">
					This is a <b class="text-lead-bold">carbon-neutral</b> delivery
				</p>
			</div>
			<button class="btn confirm-order-btn text-bold" onclick={onOrderConfirmed}
				>Confirm Order</button
			>
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
		transition: height;
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
	}

	.scrollable-list {
		max-height: 300px;
		overflow-y: auto;
	}

	.wrapper:not(:last-child) {
		margin-bottom: 1em;
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

	@media (min-width: 1000px) {
		.cart {
			position: sticky;
			top: 0;
		}
	}
</style>

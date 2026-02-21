<script lang="ts">
	import orderConfirmedIcon from '$lib/assets/images/icon-order-confirmed.svg';
	import ConfirmedItem from '$lib/components/ConfirmedItem.svelte';
	import type { ProductInCartType } from '$lib/types';
	import { fly, fade } from 'svelte/transition';

	interface Props {
		products: ProductInCartType[];
		orderTotalValue: number;
		onStartNewOrder: () => void;
	}

	let { products, orderTotalValue, onStartNewOrder }: Props = $props();
</script>

<section class="order-confirmation-section">
	<div class="dark-bg" transition:fade={{ duration: 500 }}></div>

	<div class="order-confirmation-modal-wrapper">
		<div class="order-confirmation-modal" transition:fly={{ y: 300, duration: 700 }}>
			<img
				src={orderConfirmedIcon}
				alt="Order confirmed checkmark"
				class="order-confirmed-img"
			/>
			<h2 class="title heading-big">Order Confirmed</h2>
			<p class="lead">We hope you enjoy your food!</p>

			<div class="order-summary">
				<div class="ordered-products">
					{#each products as product (product.id)}
						<ConfirmedItem
							thumbnail={product.thumbnail}
							name={product.name}
							quantity={product.quantity}
							price={product.price}
						/>
					{/each}
				</div>

				<div class="order-total-price">
					Order Total <b class="heading">${orderTotalValue.toFixed(2)}</b>
				</div>
			</div>

			<button class="btn start-new-order-btn text-bold" onclick={onStartNewOrder}
				>Start New Order</button
			>
		</div>
	</div>
</section>

<style>
	.dark-bg {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 50%);
	}

	.order-confirmation-modal-wrapper {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}

	.order-confirmation-modal {
		background-color: var(--white);
		padding: 2.5em 1.5em 1.5em 1.5em;
		border-radius: 0.75em 0.75em 0 0;
	}

	.order-confirmed-img {
		margin-bottom: 1.5em;
	}

	.title {
		margin-bottom: 0.2em;
	}

	.lead {
		font-weight: var(--regular);
		font-size: 1rem;
		line-height: 150%;
		letter-spacing: 0;
		color: var(--rose-500);
		margin-bottom: 2em;
	}

	.order-summary {
		background-color: var(--rose-50);
		padding: 1.5em;
		border-radius: 0.5em;
		margin-bottom: 2em;
	}

	.ordered-products {
		display: flex;
		flex-direction: column;
		gap: 1em;
		margin-bottom: 1.5em;
		max-height: 210px;
		overflow-y: auto;
	}

	.order-total-price {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media (min-width: 768px) {
		.order-confirmation-modal-wrapper {
			inset: 0;
			display: grid;
			place-items: center;
		}

		.order-confirmation-modal {
			padding: 2.5em;
			width: 93%;
			border-radius: 0.75em;
		}
	}

	@media (min-width: 1000px) {
		.order-confirmation-modal {
			width: 592px;
		}
	}
</style>

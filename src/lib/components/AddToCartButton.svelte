<script lang="ts">
	import cartIcon from '$lib/assets/images/icon-add-to-cart.svg';

	interface Props {
		quantity: number;
		onAddToCart: () => void;
		isInCart: boolean;
		onIncrementQuantity: () => void;
		onDecrementQuantity: () => void;
	}

	const { quantity, onAddToCart, isInCart, onIncrementQuantity, onDecrementQuantity }: Props =
		$props();
</script>

<div class="button-wrapper">
	{#if isInCart}
		<div class="change-amount-wrapper text-lead-bold">
			<button
				class="change-quantity-btn"
				aria-label="Decrease item quantity"
				onclick={onDecrementQuantity}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="10"
					height="2"
					fill="none"
					viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z" /></svg
				></button
			>
			<span>{quantity}</span>
			<button
				class="change-quantity-btn"
				aria-label="Increase item quantity"
				onclick={onIncrementQuantity}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="10"
					height="10"
					fill="none"
					viewBox="0 0 10 10"
					><path
						fill="#fff"
						d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
					/></svg
				></button
			>
		</div>
	{:else}
		<button class="add-to-cart-btn text-lead-bold" onclick={onAddToCart}>
			<img src={cartIcon} alt="Add to cart" class="add-to-card-img" />
			Add to Cart
		</button>
	{/if}
</div>

<style>
	.button-wrapper {
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.add-to-cart-btn {
		font-family: inherit;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--rose-400);
		padding: 0.9em 2em;
		outline: none;
		background-color: var(--white);
		gap: 0.5em;
		color: inherit;
		white-space: nowrap;
	}

	.add-to-cart-btn,
	.change-amount-wrapper {
		display: flex;
		border-radius: var(--pill);
		width: 160px;
	}

	.add-to-cart-btn:hover,
	.add-to-cart-btn:focus {
		cursor: pointer;
		color: var(--red);
		border-color: var(--red);
	}

	.add-to-cart-btn:active {
		transform: scale(var(--btn-clicked-scale));
	}

	.change-amount-wrapper {
		background-color: var(--red);
		padding: 0.85em;
		justify-content: space-between;
		color: var(--white);
	}

	.change-quantity-btn {
		--size: 20px;

		background-color: transparent;
		outline: none;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid var(--white);
		width: var(--size);
		height: var(--size);
	}

	.change-quantity-btn:hover,
	.change-quantity-btn:focus {
		background-color: var(--white);
		cursor: pointer;

		svg path {
			fill: var(--red);
		}
	}

	.change-quantity-btn:active {
		transform: scale(var(--btn-clicked-scale));
	}

	.change-quantity-btn {
		transition: var(--btn-transition);
	}

	.add-to-cart-btn {
		transition:
			transform var(--transition-time),
			border-color var(--transition-time),
			color var(--transition-time);
	}
</style>

<script lang="ts">
	interface Props {
		name: string;
		quantity: number;
		price: number;
		onRemoveFromCart: () => void;
	}

	const { name, quantity, price, onRemoveFromCart }: Props = $props();
</script>

<article class="cart-item">
	<div class="cart-item-info">
		<h3 class="cart-item-name text-lead-bold">{name}</h3>

		<div class="cart-item-info-details">
			<b class="amount text-lead-bold">{quantity}x</b>
			<p class="unit-price text-lead">@ ${price.toFixed(2)}</p>
			<b class="final-price text-lead-bold">${(price * quantity).toFixed(2)}</b>
		</div>
	</div>
	<button class="remove-btn" aria-label="Remove item from the cart" onclick={onRemoveFromCart}
		><svg
			xmlns="http://www.w3.org/2000/svg"
			width="10"
			height="10"
			fill="none"
			viewBox="0 0 10 10"
			><path
				fill="#CAAFA7"
				d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
			/></svg
		></button
	>
</article>

<style>
	.cart-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--rose-100);
		padding-bottom: 1em;
	}

	.cart-item-name {
		margin-bottom: 0.33em;
	}

	.cart-item-info-details {
		display: flex;
		gap: 0.5em;
	}

	.amount {
		color: var(--red);
		min-width: 21px;
	}

	.unit-price,
	.final-price {
		color: var(--rose-500);
	}

	.remove-btn {
		--size: 20px;

		background-color: transparent;
		border: 1px solid var(--rose-400);
		display: flex;
		justify-content: center;
		align-items: center;
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
	}

	.remove-btn:hover,
	.remove-btn:focus {
		border-color: var(--rose-900);
		cursor: pointer;

		svg path {
			fill: var(--rose-900);
		}
	}

	.remove-btn:active {
		transform: scale(var(--btn-clicked-scale));
	}
</style>

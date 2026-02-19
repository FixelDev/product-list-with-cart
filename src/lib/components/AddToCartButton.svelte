<script lang="ts">
	import cartIcon from '$lib/assets/images/icon-add-to-cart.svg';
	import decrementQuantityIcon from '$lib/assets/images/icon-decrement-quantity.svg';
	import incrementQuantityIcon from '$lib/assets/images/icon-increment-quantity.svg';
</script>

<div class="button-wrapper">
	<button class="add-to-cart-btn text-lead-bold">
		<img src={cartIcon} alt="Add to cart" class="add-to-card-img" />
		Add to Cart
	</button>

	<!--	<div class="change-amount-wrapper text-lead-bold">-->
	<!--		<button class="change-quantity-btn" aria-label="Decrease item quantity"-->
	<!--			><svg-->
	<!--				xmlns="http://www.w3.org/2000/svg"-->
	<!--				width="10"-->
	<!--				height="2"-->
	<!--				fill="none"-->
	<!--				viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z" /></svg-->
	<!--			></button-->
	<!--		>-->
	<!--		<span>1</span>-->
	<!--		<button class="change-quantity-btn" aria-label="Increase item quantity"-->
	<!--			><svg-->
	<!--				xmlns="http://www.w3.org/2000/svg"-->
	<!--				width="10"-->
	<!--				height="10"-->
	<!--				fill="none"-->
	<!--				viewBox="0 0 10 10"-->
	<!--				><path-->
	<!--					fill="#fff"-->
	<!--					d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"-->
	<!--				/></svg-->
	<!--			></button-->
	<!--		>-->
	<!--	</div>-->
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
</style>

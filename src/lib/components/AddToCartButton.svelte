<script lang="ts">
	import cartIcon from '$lib/assets/images/icon-add-to-cart.svg';
</script>

<div class="button-wrapper">
	<button class="add-to-cart-btn">
		<img src={cartIcon} alt="Add to cart" class="add-to-card-img" />
		Add to Cart
	</button>
</div>

<style>
	.button-wrapper {
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: red;
		border-radius: var(--pill);
	}

	.add-to-cart-btn {
		font-family: inherit;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--rose-400);
		outline: none;
		padding: 0.8em 1.5em;
		border-radius: var(--pill);
		font-weight: var(--bold);
		background-color: var(--rose-50);
		gap: 0.5em;
		font-size: 1rem;
	}
</style>

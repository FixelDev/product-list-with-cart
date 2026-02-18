<script lang="ts">
	import thumbnail from '$lib/assets/images/image-waffle-mobile.jpg';
	import AddToCartButton from './AddToCartButton.svelte';
</script>

<article class="product">
	<div class="product-thumbnail">
		<img src={thumbnail} alt="" class="product-thumbnail-image" />
		<AddToCartButton />
	</div>

	<div class="product-info">
		<p class="product-type">Waffe</p>
		<p class="product-name">Waffle with Berries</p>
		<p class="product-price"><b>$6.50</b></p>
	</div>
</article>

<style>
	.product-thumbnail-image {
		width: 100%;
		border-radius: 0.5em;
	}

	.product-type {
		color: var(--rose-500);
		font-size: 0.95rem;
		margin-bottom: 0.2em;
	}

	.product-name {
		color: var(--rose-900);
		font-weight: var(--bold);
		margin-bottom: 0.1em;
	}

	.product-price {
		color: var(--red);

		b {
			font-weight: var(--bold);
		}
	}
</style>

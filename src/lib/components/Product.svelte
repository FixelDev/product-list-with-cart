<script lang="ts">
	import AddToCartButton from './AddToCartButton.svelte';
	import type { ProductImageType } from '$lib/types';

	interface Props {
		image: ProductImageType;
		name: string;
		category: string;
		price: number;
	}

	const { image, name, category, price }: Props = $props();
</script>

<article class="product">
	<div class="product-thumbnail">
		<img src={image.mobile} alt={`${name} image`} class="product-thumbnail-image" />
		<AddToCartButton />
	</div>

	<div class="product-info">
		<p class="product-category text-lead">{category}</p>
		<h3 class="product-name text-bold">{name}</h3>
		<b class="product-price text-bold">${price.toFixed(2)}</b>
	</div>
</article>

<style>
	.product-thumbnail {
		position: relative;
		width: 100%;
		margin-bottom: 2.375em;
	}

	.product-thumbnail-image {
		width: 100%;
		border-radius: 0.5em;
		margin: 0;
		display: block;
	}

	.product-category {
		margin-bottom: 0.28em;
		color: var(--rose-500);
	}

	.product-name {
		margin-bottom: 0.25em;
	}

	.product-price {
		color: var(--red);
	}
</style>

<script lang="ts">
	import AddToCartButton from './AddToCartButton.svelte';
	import type { ProductImageType, ProductType } from '$lib/types';

	interface Props {
		id: number;
		image: ProductImageType;
		name: string;
		category: string;
		price: number;
		quantity: number;
		onAddToCart: () => void;
		isInCart: (id: number) => boolean;
		onIncrementQuantity: (id: number) => void;
		onDecrementQuantity: (id: number) => void;
	}

	const {
		id,
		image,
		name,
		category,
		price,
		quantity,
		onAddToCart,
		isInCart,
		onIncrementQuantity,
		onDecrementQuantity
	}: Props = $props();
</script>

<article class="product {isInCart(id) ? 'in-cart' : ''}">
	<div class="product-thumbnail">
		<img src={image.mobile} alt={`${name} image`} class="product-thumbnail-image" />
		<AddToCartButton
			{quantity}
			{onAddToCart}
			isInCart={isInCart(id)}
			onIncrementQuantity={() => onIncrementQuantity(id)}
			onDecrementQuantity={() => onDecrementQuantity(id)}
		/>
	</div>

	<div class="product-info">
		<p class="product-category text-lead">{category}</p>
		<h3 class="product-name text-bold">{name}</h3>
		<b class="product-price text-bold">${price.toFixed(2)}</b>
	</div>
</article>

<style>
	.product.in-cart .product-thumbnail-image {
		border-color: var(--red);
	}

	.product-thumbnail {
		position: relative;
		width: 100%;
		margin-bottom: 2.375em;
	}

	.product-thumbnail-image {
		border: 2px solid transparent;
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

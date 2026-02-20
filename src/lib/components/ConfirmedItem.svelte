<script lang="ts">
	interface Props {
		thumbnail: string;
		name: string;
		quantity: number;
		price: number;
	}

	const { thumbnail, name, quantity, price }: Props = $props();
</script>

<article class="confirmed-item">
	<img src={thumbnail} alt="{name} thumbnail" class="confirmed-item-thumbnail-img" />
	<div class="confirmed-item-info">
		<div class="confirmed-item-info-details">
			<h3 class="name text-lead-bold">{name}</h3>

			<div class="confirmed-item-price-details">
				<b class="quantity text-lead-bold">{quantity}x</b>
				<p class="unit-price text-lead">@ ${price.toFixed(2)}</p>
			</div>
		</div>

		<b class="total-price text-bold">${(price * quantity).toFixed(2)}</b>
	</div>
</article>

<style>
	.confirmed-item {
		display: flex;
		align-items: center;
		gap: 1em;
		padding-bottom: 1em;
		border-bottom: 1px solid var(--rose-100);
	}

	.confirmed-item-thumbnail-img {
		--size: 48px;

		border-radius: 0.25em;
		width: var(--size);
		height: var(--size);
	}

	.confirmed-item-info {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.confirmed-item-price-details {
		display: flex;
		gap: 0.5em;
	}

	.quantity {
		min-width: 21px;
		color: var(--red);
	}

	.unit-price {
		color: var(--rose-500);
	}

	.name {
		margin-bottom: 0.57em;
	}
</style>

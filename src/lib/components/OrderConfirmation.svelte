<script lang="ts">
	import orderConfirmedIcon from '$lib/assets/images/icon-order-confirmed.svg';
	import ConfirmedItem from '$lib/components/ConfirmedItem.svelte';
</script>

<section class="order-confirmation-section">
	<div class="order-confirmation-modal">
		<img src={orderConfirmedIcon} alt="Order confirmed checkmark" class="order-confirmed-img" />
		<h2 class="title heading-big">Order Confirmed</h2>
		<p class="lead">We hope you enjoy your food!</p>

		<div class="ordered-products">
			<ConfirmedItem />
			<ConfirmedItem />
		</div>
		<button class="btn start-new-order-btn">Start New Order</button>
	</div>
</section>

<style>
	.order-confirmation-section::before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 50%);
	}

	.order-confirmation-modal {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
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

	.ordered-products {
		background-color: var(--rose-50);
		padding: 1.5em;
		border-radius: 0.5em;
	}
</style>

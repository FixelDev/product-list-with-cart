<script lang="ts">
	import thumbnail from '$lib/assets/images/image-tiramisu-thumbnail.jpg';
</script>

<article class="confirmed-item">
	<img src={thumbnail} alt="" class="item-thumbnail-img" />
	<div class="confirmed-item-details">
		<h3 class="name text-lead-bold">Classic Tiramisu</h3>

		<div class="confirmed-item-price-details">
			<b class="quantity text-lead-bold">1x</b>
			<p class="unit-price text-lead">@ $5.50</p>
		</div>
		<b class="total-price text-bold">$5.50</b>
	</div>
</article>

<style>
	.confirmed-item {
		display: flex;
	}
</style>

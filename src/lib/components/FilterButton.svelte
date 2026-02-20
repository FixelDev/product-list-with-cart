<script lang="ts">
	import type { FilterType } from '$lib/types';

	let { name, isActive = $bindable() }: FilterType = $props();
</script>

<label class="filter">
	{name}

	{#if isActive}
		<svg
			class="remove-filter-icon"
			aria-label="Remove filter"
			xmlns="http://www.w3.org/2000/svg"
			width="10"
			height="10"
			fill="none"
			viewBox="0 0 10 10"
			><path
				fill="#CAAFA7"
				d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
			/></svg
		>
	{/if}
	<input type="checkbox" bind:checked={isActive} />
</label>

<style>
	input {
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		width: 0;
		height: 0;
	}

	.filter {
		font-family: inherit;
		border: 1px solid var(--rose-400);
		padding: 0.3em 1em;
		outline: none;
		background-color: var(--white);
		color: inherit;
		border-radius: var(--pill);
		transition:
			background-color var(--transition-time),
			color var(--transition-time),
			border-color var(--transition-time);
	}

	.filter:hover,
	.filter:has(input:focus) {
		cursor: pointer;
		color: var(--red);
		border-color: var(--red);
	}

	.filter:active {
		transform: scale(var(--btn-clicked-scale));
	}

	.filter:has(input:checked) {
		border-color: var(--red);
		background-color: var(--red);
		color: var(--white);
	}

	.filter:has(input:checked):hover,
	.filter:has(input:checked:focus) {
		background-color: hsl(from var(--red) h s calc(l - 10));
		border-color: hsl(from var(--red) h s calc(l - 10));
	}

	.remove-filter-icon {
		margin-left: 0.3em;
	}

	.remove-filter-icon path {
		fill: var(--white);
	}
</style>

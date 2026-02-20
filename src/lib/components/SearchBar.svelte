<script lang="ts">
	interface Props {
		searchQuery: string;
	}

	let { searchQuery = $bindable() }: Props = $props();
</script>

<div class="search-bar">
	<input
		class="text-lead"
		type="search"
		placeholder="Search for dessert..."
		bind:value={searchQuery}
	/>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="lucide lucide-search-icon lucide-search"
		><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg
	>
</div>

<style>
	input {
		border: none;
		outline: none;
		font-family: inherit;
		background-color: transparent;
		display: block;
		width: 100%;
		color: inherit;
	}

	.search-bar {
		width: 100%;
		display: flex;
		gap: 0.2em;
		background-color: var(--white);
		border: 1px solid var(--rose-400);
		padding: 0.3em 1em;
		border-radius: var(--pill);
		margin-bottom: 0.8em;
	}

	.search-bar:has(input:focus) {
		border-color: var(--red);

		svg {
			stroke: var(--red);
		}
	}

	@media (min-width: 768px) {
		.search-bar {
			width: 300px;
			margin-left: auto;
		}
	}
</style>

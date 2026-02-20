<script lang="ts">
	interface Props {
		category: string;
		onToggleFilter: (category: string) => void;
		isSelected: boolean;
	}

	const { category, onToggleFilter, isSelected }: Props = $props();
</script>

<button
	class="filter-btn text-lead-bold {isSelected ? 'selected' : ''}"
	onclick={() => onToggleFilter(category)}>{category}</button
>

<!--TODO: Add 'X' when filter is active-->

<style>
	.filter-btn {
		font-family: inherit;
		border: 1px solid var(--rose-400);
		padding: 0.3em 1em;
		outline: none;
		background-color: var(--white);
		color: inherit;
		border-radius: var(--pill);
	}

	.filter-btn:hover,
	.filter-btn:focus {
		cursor: pointer;
		color: var(--red);
		border-color: var(--red);
	}

	.filter-btn:active {
		transform: scale(var(--btn-clicked-scale));
	}

	.filter-btn.selected {
		border-color: var(--red);
		background-color: var(--red);
		color: var(--white);
	}

	.filter-btn.selected:hover,
	.filter-btn.selected:focus {
		background-color: hsl(from var(--red) h s calc(l - 10));
		border-color: hsl(from var(--red) h s calc(l - 10));
	}
</style>

<script lang="ts">
	import Sortable from 'sortablejs';
	import { onMount } from 'svelte';
	import Item from './Item.svelte';
	import { remoteItems } from '$lib/ts/globalVariables.svelte';

	let { gridView } = $props();

	let filesUL: HTMLUListElement;

	onMount(() => {
		Sortable.create(filesUL, {
			delay: 100,
			delayOnTouchOnly: true,
			ghostClass: 'invisible',
			animation: 0
		});
	});
</script>

<div class="z-10 flex w-full justify-center pb-10">
	<ul
		bind:this={filesUL}
		class="flex w-full"
		class:flex-wrap={gridView}
		class:justify-center={gridView}
		class:flex-col={!gridView}
		class:gap-2={!gridView}
		class:p-2={!gridView}
		class:max-w-100={!gridView}
	>
		{#each remoteItems as pdf (pdf.id)}
			<Item {pdf} {gridView} />
		{/each}
	</ul>
</div>

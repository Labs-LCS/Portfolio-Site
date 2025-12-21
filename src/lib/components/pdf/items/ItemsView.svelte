<script lang="ts">
	import Sortable from 'sortablejs';
	import { onMount } from 'svelte';
	import Item from './Item.svelte';
	import { remoteItems } from '$lib/ts/globalVariables.svelte';

	let filesUL: HTMLUListElement;

	onMount(() => {
		Sortable.create(filesUL, {
			delay: 100,
			delayOnTouchOnly: true,
			ghostClass: 'invisible'
		});
	});
</script>

<div class="z-10 h-[calc(100dvh-80px)] sm:min-w-108 mx-2 overflow-y-scroll no-scrollbar">
	<ul bind:this={filesUL} class="flex flex-col gap-3 pt-4 px-2 pb-32 sm:pb-14">
		<!-- {#each remoteItems as pdf (pdf.id)} -->
		<Item />
		<Item />
		<Item />
		<Item />
		<Item />
		<Item />
		<Item />
		<Item />
		<Item />
		<Item />
		<Item />
		<Item />
		<!-- {/each} -->
	</ul>
</div>

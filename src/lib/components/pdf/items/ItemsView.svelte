<script lang="ts">
	import Sortable from 'sortablejs';
	import { onMount } from 'svelte';
	import Item from './Item.svelte';

	let filesUL: HTMLUListElement;

	onMount(() => {
		Sortable.create(filesUL, {
			delay: 100,
			delayOnTouchOnly: true,
			ghostClass: 'invisible'
		});
	});
</script>

<div class="z-10 h-[calc(100dvh-80px)] sm:min-w-108 overflow-y-scroll no-scrollbar">
	<ul bind:this={filesUL} class="flex flex-col gap-3 pt-4 px-4 mb-32 sm:mb-14">
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
	</ul>
</div>

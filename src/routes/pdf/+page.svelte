<script lang="ts">
	import FilesView from '$lib/components/pdf/items/ItemsView.svelte';
	import Buttons from '$lib/components/pdf/Buttons.svelte';
	import DropArea from '$lib/components/pdf/DropArea.svelte';
	import Workbench from '$lib/components/pdf/Workbench.svelte';
	import WorkInfo from '$lib/components/pdf/WorkInfo.svelte';
	import { initializeIDB } from '$lib/ts/fileUpload.svelte';
	import { bgColor, remoteItems } from '$lib/ts/globalVariables.svelte';
	import { onMount } from 'svelte';
	let gridView = $state(false);

	onMount(async () => {
		await initializeIDB('pdf_test', 'store_test');
	});
</script>

<div class="fixed z-0 h-dvh w-dvw overflow-hidden top-0">
	{#if bgColor.hexColor == '#000000'}
		<img
			class="h-full w-full object-cover"
			src="/bg-pdf.webp"
			alt="Landscape Photography of Mountains Covered in Snow"
		/>
	{:else}
		<div class="z-0 h-full w-full" style="background-color: {bgColor.hexColor};"></div>
	{/if}
</div>
{#if remoteItems.length > 0}
	<div class="flex flex-row justify-center md:justify-between">
		<div
			class="z-99 w-full fixed justify-evenly flex top-18 right-0 text-white/40 bg-black/40 backdrop-blur-xs pl-3 border-b border-gray-300/20 md:hidden"
		>
			<button
				class="cursor-pointer hover:text-white"
				onclick={() => {
					gridView = true;
				}}>Grid View</button
			>
			<button
				class="cursor-pointer hover:text-white"
				onclick={() => {
					gridView = false;
				}}>List View</button
			>
		</div>

		<div class="flex w-full justify-center">
			<FilesView {gridView} />
		</div>
		<Workbench />
	</div>
	<WorkInfo />
{:else}
	<DropArea />
{/if}

<Buttons />

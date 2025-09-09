<script lang="ts">
	import FilesView from '$lib/components/pdf/accordion/FilesView.svelte';
	import Buttons from '$lib/components/pdf/Buttons.svelte';
	import DropArea from '$lib/components/pdf/DropArea.svelte';
	import Workbench from '$lib/components/pdf/Workbench.svelte';
	import WorkInfo from '$lib/components/pdf/WorkInfo.svelte';
	import { initializeIDB } from '$lib/ts/fileUpload.svelte';
	import { bgColor } from '$lib/ts/globalVariables.svelte';
	import { onMount } from 'svelte';
	let gridView = $state(false);
	let hasFiles = $state(true);

	onMount(async () => {
		await initializeIDB('pdf_test', 'store_test');
	});
</script>

<div
	class="flex flex-row z-99999 fixed top-[50%] justify-center gap-4 text-center p-5 items-center bg-black/50 backdrop-blur-xs text-orange-500 bold text-3xl md:text-5xl w-full"
>
	<span>&#9888;</span><span>UNDER DEVELOPMENT</span><span>&#9888;</span>
</div>
<div
	class="flex flex-col z-99999 fixed top-[80%] justify-center gap-4 text-center p-5 items-center bg-black/50 backdrop-blur-xs text-orange-500 bold text-3xl w-full"
>
	<span> Still want to use the old site? </span>
	<span class="underline">
		<a href="https://pdf-client-side.vercel.app/pdf_editor"> Access here </a>
	</span>
</div>

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
{#if hasFiles}
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

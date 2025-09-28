<script lang="ts">
	import { uploadFiles } from '$lib/ts/fileUpload.svelte';
	import Separator from '../Separator.svelte';
	let inputFiles: HTMLInputElement;
	let dragoverHint = $state(false);
</script>

<div
	class="flex justify-center relative select-none pt-10"
	ondragover={(e) => {
		e.preventDefault();
		dragoverHint = true;
	}}
	ondragenter={(e) => {
		e.preventDefault();
		dragoverHint = true;
	}}
	ondragleave={(e) => {
		e.preventDefault();
		dragoverHint = false;
	}}
	ondrop={async (e) => {
		e.preventDefault();
		dragoverHint = false;
		const files = e.dataTransfer?.files;
		try {
			if (files) {
				await uploadFiles(files);
			} else {
				alert('No PDF files were uploaded.');
			}
		} catch (error) {
			window.alert(error);
		}
	}}
	role="region"
	aria-label="File upload drop zone"
>
	<div class="absolute w-full top-20 sm:top-26 md:top-45 transition-all duration-600">
		<Separator />
	</div>
	<button
		onclick={() => inputFiles.click()}
		class={dragoverHint
			? 'font-family-righteous flex text-center justify-center items-center text-3xl md:text-4xl transition-all duration-600 bg-orange-600/10 text-orange-600/85 backdrop-blur-xs h-50 w-[80%] sm:h-60 md:h-100 md:w-180 rounded-2xl border border-white/40 hover:border-orange-600 inset-shadow-2xs inset-shadow-gray-400'
			: 'font-family-righteous flex cursor-pointer text-center text-white/50 justify-center items-center text-3xl md:text-4xl transition-all duration-600 hover:bg-orange-600/10 hover:text-orange-600/85 backdrop-blur-xs bg-black/5 h-50 w-[80%] sm:h-60 md:h-100 md:w-180 rounded-2xl border border-white/40 hover:border-orange-600 inset-shadow-2xs inset-shadow-gray-400'}
	>
		Drop your files or click here
	</button>
</div>

<input
	bind:this={inputFiles}
	type="file"
	accept="application/pdf"
	multiple
	style="display: none;"
	onchange={async (e) => {
		const files = e.currentTarget.files;
		if (files) {
			await uploadFiles(files);
		}
	}}
/>

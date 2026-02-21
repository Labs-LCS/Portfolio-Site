<script lang="ts">
	import { uploadFiles } from '$lib/ts/fileUpload.svelte';
	import Separator from '../Separator.svelte';
	let inputFiles: HTMLInputElement;
	let dragoverHint = $state(false);
	let dropAreaText = 'Drop your files or click here';
</script>

<div
	class="flex justify-center relative select-none mt-15 md:mt-20"
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
	<div class="absolute w-full h-full content-center">
		<Separator />
	</div>
	<button
		onclick={() => inputFiles.click()}
		class="z-100 font-family-righteous cursor-pointer text-center text-white/70 text-3xl hover:text-white bg-black/50 h-50 mx-10 px-5 rounded-2xl border border-white/70 hover:border-white"
	>
		{dropAreaText}
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

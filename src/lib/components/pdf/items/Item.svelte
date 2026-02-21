<script lang="ts">
	// import type { RemotePDFObject } from '$lib/ts/classes.svelte';

	let pdf = {
		original_filename: 'teste.pdf',
		file_size_bytes: 10000,
		page_count: 27
	};
	// let { gridView, pdf }: { gridView: boolean; pdf: RemotePDFObject } = $props();
	let selected = $state(false);
</script>

<li
	class={[
		'flex p-2 gap-2 select-none hover:bg-white rounded-lg border backdrop-blur-xs',
		selected
			? 'outline-4 outline-orange-700 border-orange-800 bg-blue-50'
			: 'border-gray-400 bg-white/60'
	]}
>
	<div class="flex flex-1/4">
		<button>
			<img
				src="/210x290.jpg"
				class="max-h-32 object-contain cursor-pointer"
				alt="PDF's Cover Thumbnail"
			/>
		</button>
	</div>
	<div class="flex flex-3/4 flex-col gap-y-2 justify-evenly">
		<input type="text" placeholder="File name" class="flex bg-black/10 rounded-md pl-2 ml-2" />
		<div class="flex justify-end gap-2 text-gray-700">
			<button
				class="rounded-md bg-black/10 border border-gray-600/30 px-2 cursor-pointer hover:bg-black/20"
				onclick={() => (selected = !selected)}>Select</button
			>
			<button
				class="rounded-md bg-black/10 border border-gray-600/30 px-2 cursor-pointer hover:bg-black/20"
				>Info</button
			>
			<button
				class="rounded-md bg-black/10 border border-gray-600/30 px-2 cursor-pointer hover:bg-black/20"
				>Edit</button
			>
			<button
				class="rounded-md bg-black/10 border border-gray-600/30 px-2 cursor-pointer hover:bg-black/20"
				>Delete</button
			>
		</div>
		<div class="text-xs text-gray-500 flex justify-end gap-x-4 italic">
			<span>{pdf.file_size_bytes} bytes</span>
			<span>{pdf.page_count} pages</span>
		</div>
	</div>
</li>

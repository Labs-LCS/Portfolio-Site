<script lang="ts">
	import PdfThumbnail from './thumbnails/PdfThumbnail.svelte';

	let workbench: HTMLDivElement,
		hint = 'Select a file to view its content';
</script>

<div
	bind:this={workbench}
	class="max-sm:hidden z-100 h-[calc(100dvh-220px)] w-full p-4 m-4 bg-black/10 backdrop-blur-xs border border-black/10 rounded-2xl"
>
	<div class="w-full inline-flex items-center justify-between mb-4 text-lg font-bold tracking-wide">
		<h1 class="py-2 px-4 bg-white/20 text-black/70 w-fit rounded-xl border border-black/10">
			Workbench
		</h1>
		<h2 class="py-2 px-4 bg-black/20 text-white/70 w-fit rounded-xl border border-black/10">
			{hint}
		</h2>
	</div>
	<div
		class="h-[calc(100%-66px)] flex flex-wrap justify-center items-center gap-4 border border-black/10 rounded-2xl bg-white/20 overflow-scroll text-3xl p-4"
	>
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
		<PdfThumbnail />
	</div>
</div>

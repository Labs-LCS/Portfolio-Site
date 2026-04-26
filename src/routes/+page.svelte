<script lang="ts">
	import Separator from '$lib/components/Separator.svelte';
</script>

<section
	class="flex flex-col items-center justify-center min-h-[calc(100dvh-80px)] px-6 py-16 text-white text-center"
>
	<h2 class="font-family-righteous text-5xl md:text-7xl tracking-wider mb-4">PDF Editor</h2>
	<p class="text-white/60 max-w-prose text-lg md:text-xl mb-10">
		A privacy-focused, browser-based PDF editor. Merge, reorder, compress and download — all
		processed locally in your browser. Your files never leave your device.
	</p>
	<a
		href="https://pdf.labs-lcs.com"
		target="_blank"
		class="font-family-righteous text-xl px-10 py-3 rounded-xl bg-orange-600/70 hover:bg-orange-600 border border-orange-500 transition-colors mb-16"
	>
		Open Editor ↗
	</a>
	<div class="w-full max-w-4xl">
		<img
			src="/pdf_editor_1.webp"
			alt="PDF Editor screenshot"
			class="rounded-xl border border-white/10 shadow-lg shadow-black/60 w-full"
		/>
	</div>
</section>

<Separator />

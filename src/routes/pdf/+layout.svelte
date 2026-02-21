<script lang="ts">
	import '../../app.css';
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<img
	class="fixed top-0 h-dvh w-dvw object-cover"
	src="/bg-pdf.webp"
	alt="Landscape Photography of Mountains Covered in Snow"
/>

<div class="sm:flex overflow-hidden">
	{@render children?.()}
</div>

<script>
	import { page } from '$app/state';
</script>

<footer
	class="z-101 flex items-center justify-center backdrop-blur-xs bg-black/50 border-t border-gray-700 fixed bottom-0 w-full h-9 select-none"
>
	{#if page.route.id == '/'}
		<a
			href="mailto:contact@labs-lcs.com"
			class="tracking-wider text-orange-600 font-family-righteous">contact@labs-lcs.com</a
		>
	{:else if page.route.id == '/pdf'}
		<div class="flex w-full text-white/40 justify-between px-4">
			<span>Files: 12</span>
			<span>Total size: 630MB</span>
		</div>
	{/if}
</footer>

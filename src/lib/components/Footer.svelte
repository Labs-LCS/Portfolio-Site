<script>
	import { page } from '$app/state';
</script>

{#if page.route.id == '/'}
	<footer class="z-99 fixed bottom-0 w-full h-9 select-none">
		<div class="w-full h-full backdrop-blur-xs bg-black/50 border-t border-gray-700">
			<div
				class="h-full flex justify-center items-center tracking-wider text-orange-600"
				style="font-family: 'Righteous';"
			>
				<a href="mailto:contact@labs-lcs.com">contact@labs-lcs.com</a>
			</div>
		</div>
	</footer>
{:else if page.route.id == '/pdf'}
	<footer class="z-99 fixed bottom-0 w-full h-6 select-none">
		<div
			class="flex w-full h-full backdrop-blur-xs bg-black/50 border-t border-gray-700 text-white/40 justify-between px-4"
		>
			<span>Files: 12</span>
			<span>Total size: 630MB</span>
		</div>
	</footer>
{/if}

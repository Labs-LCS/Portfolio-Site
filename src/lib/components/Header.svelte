<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import me from '$lib/assets/me.webp';
	import { bgColor } from '$lib/ts/globalVariables.svelte';
</script>

<div
	class="z-99 fixed top-0 flex justify-between py-2 px-4 w-full min-h-18 backdrop-blur-xs bg-black/50 border-b border-gray-700 flex-wrap select-none"
>
	{#if page.route.id == '/'}
		<div class="flex flex-row justify-center items-center gap-x-2">
			<img class="flex h-11" src="/icons/labs-lcs.webp" alt="Labs LCS Logomark" />
			<div class="flex flex-col text-white">
				<span class="text-xl tracking-wider font-family-righteous">Labs.LCS - Projects</span>
				<span class="text-xs italic">Developed by Lucas Campanhã dos Santos</span>
			</div>
		</div>
		<div
			class="sm:gap-x-4 font-extralight flex text-white items-center justify-evenly max-sm:w-full pt-3"
		>
			<div>
				<a class="cursor-pointer hover:text-orange-600" href={resolve('/pdf/')} target="_blank"
					>PDF Editor</a
				>
			</div>
			<div>
				<a
					class="cursor-pointer hover:text-orange-600"
					href="https://labs-lcs-server.com"
					target="_blank">Labs Server</a
				>
			</div>
		</div>
	{:else if page.route.id == '/pdf'}
		<div class="flex justify-between w-full flex-row items-center gap-x-2">
			<div class="flex items-center gap-x-2">
				<img class="flex h-11" src="/icons/labs-lcs.webp" alt="Labs LCS Logomark" />
				<div class="flex flex-col text-white">
					<div class="text-xl tracking-wider font-family-righteous">
						<span class="max-sm:hidden">Labs.LCS -</span> PDF Editor
					</div>
					<div class="text-xs italic">
						<span class="sm:hidden">by Lucas Campanhã</span>
						<span class="max-sm:hidden">Developed by Lucas Campanhã dos Santos</span>
					</div>
				</div>
			</div>

			<div class="flex items-center gap-4">
				<input
					type="color"
					class="rounded-full h-10 w-10 border-gray-200"
					oninput={(e) => (bgColor.hexColor = e.currentTarget.value)}
				/>
				<img
					src={me}
					alt="Me"
					class="flex rounded-full h-12 w-12 object-cover border border-orange-600 shadow-sm shadow-blue-600/80"
				/>
			</div>
		</div>
	{/if}
</div>

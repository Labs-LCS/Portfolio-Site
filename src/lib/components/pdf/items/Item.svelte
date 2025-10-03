<script lang="ts">
	let { gridView } = $props();
	let size = '3,2MB',
		pages = 30,
		selected = $state(false);
</script>

{#if gridView}
	<li class="p-4 select-none">
		<div class="block relative h-46 w-34 bg-white/30 backdrop-blur-xs rounded-md p-2">
			<div class="relative h-full w-full flex justify-center items-center">
				<img src="/210x290.jpg" class="w-full h-full object-contain" alt="" />
				<h3
					class="absolute h-full w-full text-center content-center text-transparent hover:text-white hover:backdrop-blur-xs hover:bg-black/70 transition-all"
				>
					Nome do arquivo
				</h3>
			</div>
		</div>
	</li>
{:else}
	<li
		class={selected
			? 'flex p-2 select-none h-26 w-full bg-orange-600/30 hover:bg-orange-600/40 rounded-sm border border-gray-300 inset-shadow-sm backdrop-blur-xs gap-x-2'
			: 'flex p-2 select-none h-26 w-full bg-white/40 hover:bg-orange-600/20 rounded-sm border border-gray-300 inset-shadow-sm backdrop-blur-xs gap-x-2'}
	>
		<div class="flex flex-1/4 gap-x-2">
			<button onclick={() => (selected = !selected)}>
				<img
					src="/210x290.jpg"
					class="h-full object-contain cursor-pointer"
					alt="PDF's Cover Thumbnail"
				/>
			</button>
		</div>
		<div class="flex flex-3/4 flex-col justify-between text-sm">
			<input
				type="text"
				placeholder="File name"
				class="flex max-w-70 h-fit backdrop-blur-xs bg-black/10 rounded-full px-2 text-sm"
			/>
			<div class="flex justify-end gap-3">
				<button
					class="rounded-full bg-black/10 border border-gray-600/30 px-2 cursor-pointer hover:bg-black/20"
					>Cover</button
				>
				<button
					class="rounded-full bg-black/10 border border-gray-600/30 px-2 cursor-pointer hover:bg-black/20"
					>Edit</button
				>
				<button
					class="rounded-full bg-red-400/10 border border-red-600/30 px-2 cursor-pointer hover:bg-red-600/50"
					>Delete</button
				>
			</div>
			<div class="text-xs text-gray-500 flex justify-end gap-x-4 italic">
				<span>{size}</span>
				<span>{pages} pages</span>
			</div>
		</div>
	</li>
{/if}

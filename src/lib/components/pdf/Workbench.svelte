<script lang="ts">
	import FilesView from './accordion/FilesView.svelte';
	let workbench: HTMLDivElement,
		expanded: boolean = $state(false);
</script>

<div
	bind:this={workbench}
	class={expanded
		? [
				'transition-all duration-500 fixed top-18 left-0 z-1000 max-md:hidden flex flex-col w-full h-[calc(100vh-73px)] bg-black/40 inset-shadow-2xs border border-black/10 backdrop-blur-xs p-4 gap-4'
			]
		: [
				'transition-all duration-500 sticky top-28 z-100 m-4 max-md:hidden flex flex-col w-full h-[calc(100vh-250px)] bg-black/10 inset-shadow-2xs border border-black/10 backdrop-blur-xs p-4 rounded-2xl gap-4'
			]}
>
	<h1
		class="text-lg font-bold p-1 px-3 bg-white/20 tracking-wide text-black/70 h-fit w-fit rounded-xl border border-black/10"
	>
		Workbench
	</h1>
	<div
		class="transition-transform flex w-full h-full border border-black/10 rounded-2xl bg-white/20 overflow-scroll"
	>
		<FilesView gridView={true} />
	</div>

	{#if !expanded}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30px"
			height="30px"
			viewBox="0 0 24 24"
			class="cursor-pointer z-100 absolute top-4 right-4 hover:scale-115 transition-transform"
			role="button"
			aria-label="Expand workbench"
			tabindex="0"
			onclick={() => (expanded = true)}
			onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && (expanded = true)}
			fill="none"
		>
			<path
				d="M16 8L21 3M21 3H16M21 3V8M8 8L3 3M3 3L3 8M3 3L8 3M8 16L3 21M3 21H8M3 21L3 16M16 16L21 21M21 21V16M21 21H16"
				stroke="#000000"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30"
			height="30"
			class="cursor-pointer z-100 absolute top-4 right-4 hover:scale-115 transition-transform"
			viewBox="0 0 24 24"
			role="button"
			aria-label="Expand workbench"
			tabindex="0"
			onclick={() => (expanded = false)}
			onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && (expanded = false)}
			fill="none"
			stroke="#000000"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M15 15l6 6m-6-6v4.8m0-4.8h4.8" />
			<path d="M9 19.8V15m0 0H4.2M9 15l-6 6" />
			<path d="M15 4.2V9m0 0h4.8M15 9l6-6" />
			<path d="M9 4.2V9m0 0H4.2M9 9L3 3" />
		</svg>
	{/if}
</div>

<script lang="ts">
	import Separator from '../Separator.svelte';

	let filesBtn: HTMLButtonElement,
		mergeBtn: HTMLButtonElement,
		divideBtn: HTMLButtonElement,
		compressBtn: HTMLButtonElement,
		deletePagesBtn: HTMLButtonElement,
		storageBtn: HTMLButtonElement;
	let filesAccordion: HTMLDivElement,
		mergeAccordion: HTMLDivElement,
		divideAccordion: HTMLDivElement,
		compressAccordion: HTMLDivElement,
		deletePagesAccordion: HTMLDivElement,
		storageAccordion: HTMLDivElement;

	function toggleAccordion(accordionBtn: HTMLButtonElement, activeAccordion: HTMLDivElement) {
		if (activeAccordion.dataset.open == 'false') {
			activeAccordion.classList.remove('max-h-0');
			activeAccordion.classList.remove('overflow-hidden');
			accordionBtn.classList.add('sticky');
			activeAccordion.dataset.open = 'true';
		} else {
			activeAccordion.classList.add('max-h-0');
			activeAccordion.classList.add('overflow-hidden');
			accordionBtn.classList.remove('sticky');
			activeAccordion.dataset.open = 'false';
		}
		closeInactiveAccordion(activeAccordion);
	}
	function closeInactiveAccordion(activeAccordion: HTMLDivElement) {
		let accordions = [
			filesAccordion,
			mergeAccordion,
			divideAccordion,
			compressAccordion,
			deletePagesAccordion,
			storageAccordion
		].filter((item) => item.dataset.open == 'true' && item != activeAccordion);
		accordions.forEach((item) => {
			item.classList.add('max-h-0');
			item.classList.add('overflow-hidden');
			item.previousElementSibling?.classList.remove('sticky');
			item.dataset.open = 'false';
		});
	}
</script>

<div
	class="z-98 w-full fixed bg-clip-text text-white/40 justify-evenly flex top-18 bg-blue-950/60 backdrop-blur-xs pl-3 border-b border-gray-300/20"
	style="font-family: 'Righteous';"
>
	<button
		class="cursor-pointer hover:text-orange-600/80"
		onclick={() => {
			gridView = true;
		}}>Grid View</button
	>
	<button
		class="cursor-pointer hover:text-orange-600/80"
		onclick={() => {
			gridView = false;
		}}>List View</button
	>
</div>
<div class="text-white flex flex-col w-full select-none">
	<button
		bind:this={filesBtn}
		class="z-90 hover:scale-99 cursor-pointer pl-3 transition-transform flex top-24 sm:top-18 backdrop-blur-xs bg-black/50 border-b border-gray-700"
		onclick={() => toggleAccordion(filesBtn, filesAccordion)}
	>
		<span class="text-[40px] italic text-orange-600" style="font-family: 'Righteous';">Files</span>
		<span
			class="text-[40px] italic absolute left-3.25 top-0.25 text-blue-700"
			style="font-family: 'Righteous';">Files</span
		>
		<span class="text-[40px] italic absolute left-3.5 top-0.5" style="font-family: 'Righteous';"
			>Files</span
		>
	</button>
	<div data-open="false" bind:this={filesAccordion} class="block max-h-0 overflow-hidden">
		<div class="flex flex-col overflow-visible">
			<div
				class="z-90 bg-clip-text text-white/40 justify-evenly flex sticky top-[157px] sm:top-[133px] bg-blue-950/60 backdrop-blur-xs pl-3 border-b border-gray-300/20"
				style="font-family: 'Righteous';"
			>
				<button
					class="cursor-pointer hover:text-orange-600/80"
					onclick={() => {
						gridView = true;
					}}>Grid View</button
				>
				<button
					class="cursor-pointer hover:text-orange-600/80"
					onclick={() => {
						gridView = false;
					}}>List View</button
				>
			</div>
		</div>
	</div>

	<button
		bind:this={mergeBtn}
		class="hover:scale-99 cursor-pointer pl-3 transition-transform flex top-24 sm:top-18 backdrop-blur-xs bg-black/50 border-b border-gray-700"
		onclick={() => toggleAccordion(mergeBtn, mergeAccordion)}
	>
		<span class="text-[40px] italic text-orange-600" style="font-family: 'Righteous';">Merge </span>
		<span
			class="text-[40px] italic absolute left-3.25 top-0.25 text-blue-700"
			style="font-family: 'Righteous';">Merge</span
		>
		<span class="text-[40px] italic absolute left-3.5 top-0.5" style="font-family: 'Righteous';"
			>Merge</span
		>
	</button>
	<div data-open="false" bind:this={mergeAccordion} class="block max-h-0 overflow-hidden"></div>

	<button
		bind:this={divideBtn}
		class="hover:scale-99 cursor-pointer pl-3 transition-transform flex top-24 sm:top-18 backdrop-blur-xs bg-black/50 border-b border-gray-700"
		onclick={() => toggleAccordion(divideBtn, divideAccordion)}
	>
		<span class="text-[40px] italic text-orange-600" style="font-family: 'Righteous';"
			>Divide
		</span>
		<span
			class="text-[40px] italic absolute left-3.25 top-0.25 text-blue-700"
			style="font-family: 'Righteous';">Divide</span
		>
		<span class="text-[40px] italic absolute left-3.5 top-0.5" style="font-family: 'Righteous';"
			>Divide</span
		>
	</button>
	<div data-open="false" bind:this={divideAccordion} class="block max-h-0 overflow-hidden">
		<div class="flex flex-col overflow-visible gap-y-3">
			<div
				class="sticky top-[157px] sm:top-[133px] bg-blue-950/60 backdrop-blur-xs pl-3 border-b border-blue-950"
				style="font-family: 'Righteous';"
			>
				Certificates
			</div>
			<img src="https://picsum.photos/500/300" alt="" />
			<Separator />
			<div
				class="sticky top-[182px] sm:top-[158px] bg-blue-950/60 backdrop-blur-xs pl-3 border-b border-blue-950"
				style="font-family: 'Righteous';"
			>
				Book Courses
			</div>
			<img src="https://picsum.photos/500/300" alt="" />
		</div>
	</div>

	<button
		bind:this={compressBtn}
		class="hover:scale-99 cursor-pointer pl-3 transition-transform flex top-24 sm:top-18 backdrop-blur-xs bg-black/50 border-b border-gray-700"
		onclick={() => toggleAccordion(compressBtn, compressAccordion)}
	>
		<span class="text-[40px] italic text-orange-600" style="font-family: 'Righteous';"
			>Compress
		</span>
		<span
			class="text-[40px] italic absolute left-3.25 top-0.25 text-blue-700"
			style="font-family: 'Righteous';">Compress</span
		>
		<span class="text-[40px] italic absolute left-3.5 top-0.5" style="font-family: 'Righteous';"
			>Compress</span
		>
	</button>
	<div data-open="false" bind:this={compressAccordion} class="block max-h-0 overflow-hidden">
		<div class="flex flex-col overflow-visible gap-y-3">
			<div
				class="sticky top-[157px] sm:top-[133px] bg-blue-950/60 backdrop-blur-xs pl-3 border-b border-blue-950"
				style="font-family: 'Righteous';"
			>
				Certificates
			</div>
			<img src="https://picsum.photos/500/300" alt="" />
			<Separator />
			<div
				class="sticky top-[182px] sm:top-[158px] bg-blue-950/60 backdrop-blur-xs pl-3 border-b border-blue-950"
				style="font-family: 'Righteous';"
			>
				Book Courses
			</div>
			<img src="https://picsum.photos/500/300" alt="" />
		</div>
	</div>

	<button
		bind:this={deletePagesBtn}
		class="hover:scale-99 cursor-pointer pl-3 transition-transform flex top-24 sm:top-18 backdrop-blur-xs bg-black/50 border-b border-gray-700"
		onclick={() => toggleAccordion(deletePagesBtn, deletePagesAccordion)}
	>
		<span class="text-[40px] text-start italic text-orange-600" style="font-family: 'Righteous';"
			>Delete Pages
		</span>
		<span
			class="text-[40px] text-start italic absolute left-3.25 top-0.25 text-blue-700"
			style="font-family: 'Righteous';">Delete Pages</span
		>
		<span
			class="text-[40px] text-start italic absolute left-3.5 top-0.5"
			style="font-family: 'Righteous';"
		>
			Delete Pages</span
		>
	</button>
	<div data-open="false" bind:this={deletePagesAccordion} class="block max-h-0 overflow-hidden">
		<div class="text-justify">
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		</div>
	</div>

	<button
		bind:this={storageBtn}
		class="hover:scale-99 cursor-pointer pl-3 transition-transform flex top-24 sm:top-18 backdrop-blur-xs bg-black/50 border-b border-gray-700"
		onclick={() => toggleAccordion(storageBtn, storageAccordion)}
	>
		<span class="text-[40px] text-start italic text-orange-600" style="font-family: 'Righteous';"
			>Storage
		</span>
		<span
			class="text-[40px] text-start italic absolute left-3.25 top-0.25 text-blue-700"
			style="font-family: 'Righteous';">Storage</span
		>
		<span
			class="text-[40px] text-start italic absolute left-3.5 top-0.5"
			style="font-family: 'Righteous';"
		>
			Storage</span
		>
	</button>
	<div data-open="false" bind:this={storageAccordion} class="block max-h-0 overflow-hidden">
		<div class="text-justify">
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		</div>
	</div>
</div>

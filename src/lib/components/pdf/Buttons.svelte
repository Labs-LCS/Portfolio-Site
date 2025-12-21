<script lang="ts">
	import { uploadFiles } from '$lib/ts/fileUpload.svelte';

	let inputFiles: HTMLInputElement;
	function changeMenu() {
		if (menu.dataset.open == 'true') {
			closeMenu();
			menu.dataset.open = 'false';
		} else {
			openMenu();
			menu.dataset.open = 'true';
		}
	}

	function openMenu() {
		menuBtn.classList.add('rotate-45');
		menuBtn.classList.remove('bg-orange-600/50');
		menuBtn.classList.remove('hover:bg-orange-600/80');
		menuBtn.classList.remove('border-orange-600');
		menuBtn.classList.add('bg-red-700/50');
		menuBtn.classList.add('hover:bg-red-700/80');
		menuBtn.classList.add('border-red-600');
		menu.classList.remove('invisible');
		menu.classList.remove('scale-93');
	}

	function closeMenu() {
		menuBtn.classList.remove('rotate-45');
		menuBtn.classList.add('bg-orange-600/50');
		menuBtn.classList.add('hover:bg-orange-600/80');
		menuBtn.classList.add('border-orange-600');
		menuBtn.classList.remove('bg-red-700/50');
		menuBtn.classList.remove('hover:bg-red-700/80');
		menuBtn.classList.remove('border-red-600');
		menu.classList.add('scale-93');
		setTimeout(() => {
			menu.classList.add('invisible');
		}, 50);
	}

	let menu: HTMLDivElement, menuBtn: HTMLButtonElement;
</script>

<div class="z-101 fixed bottom-14 right-8">
	<button
		bind:this={menuBtn}
		aria-label="Buttons"
		class="cursor-pointer transition-transform rounded-full h-12 w-12 bg-orange-600/50 border border-orange-600 hover:bg-orange-600/80"
		onclick={() => changeMenu()}
	>
		<svg
			class="h-8 fill-gray-200/70 m-auto"
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 92 92"
			enable-background="new 0 0 92 92"
			xml:space="preserve"
			data-iconid="plus"
			data-svgname="Plus"
		>
			<path
				id="XMLID_933_"
				d="M72.5,46.5c0,2.5-2,4.5-4.5,4.5H50v17c0,2.5-2,4.5-4.5,4.5S41,70.5,41,68V51H24c-2.5,0-4.5-2-4.5-4.5
	s2-4.5,4.5-4.5h17V24c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5v18h18C70.5,42,72.5,44,72.5,46.5z"
			></path>
		</svg>
	</button>
</div>

<div
	bind:this={menu}
	data-open="false"
	class="font-family-righteous invisible z-100 fixed tracking-wider transition-transform bottom-12 right-6 bg-black/50 backdrop-blur-xs border-orange-600 border rounded-xl rounded-br-4xl"
>
	<div class="text-2xl text-white/70 p-3">
		<button
			class="cursor-pointer flex w-full border-b border-gray-300/50 p-2 mb-2 hover:text-white"
		>
			Download
		</button>
		<button
			class="cursor-pointer flex w-full border-b border-gray-300/50 p-2 mb-2 hover:text-white"
		>
			Merge all
		</button>
		<button
			class="cursor-pointer flex w-full border-b border-gray-300/50 p-2 mb-2 hover:text-white"
		>
			Compress files
		</button>
		<button
			class="cursor-pointer flex w-[70%] border-b border-gray-300/50 p-2 mb-2 hover:text-white"
		>
			Add files
		</button>
	</div>
</div>

<input
	bind:this={inputFiles}
	type="file"
	accept="application/pdf"
	multiple
	style="display: none;"
	onchange={async (e) => {
		const files = e.currentTarget.files;
		if (files) {
			await uploadFiles(files);
		} else {
			alert('No PDF files were uploaded.');
		}
	}}
/>

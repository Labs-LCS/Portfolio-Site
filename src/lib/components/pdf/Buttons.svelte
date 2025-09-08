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
		menu.classList.remove('invisible');
		menu.classList.remove('scale-93');
	}

	function closeMenu() {
		menuBtn.classList.remove('rotate-45');
		menuBtn.classList.add('bg-orange-600/50');
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
		class="z-101 cursor-pointer fill-gray-200/70 flex transition-all items-center justify-center rounded-full h-12 w-12 bg-orange-600/50 text-3xl backdrop-blur-xs border border-orange-600 hover:bg-orange-600/80"
		onclick={() => changeMenu()}
	>
		<svg
			class="h-8"
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
	class="font-family-righteous z-100 invisible scale-93 fixed tracking-wider gap-4 transition-transform bottom-12 right-6 w-80 h-80 bg-black/50 backdrop-blur-xs border-orange-600 border rounded-br-4xl rounded-bl-xl rounded-tr-xl rounded-tl-xl"
>
	<div class="h-full w-full flex flex-col p-6 text-2xl gap-3 text-white/90">
		<button
			class="cursor-pointer hover:scale-103 transition-transform relative flex w-full border-b border-gray-300/50 p-3"
		>
			Download
		</button>
		<button
			class="cursor-pointer hover:scale-103 transition-transform relative flex w-full border-b border-gray-300/50 p-3"
		>
			Merge all
		</button>
		<button
			class="cursor-pointer hover:scale-103 transition-transform relative flex w-full border-b border-gray-300/50 p-3"
		>
			Compress files
		</button>
		<button
			onclick={() => inputFiles.click()}
			class="cursor-pointer hover:scale-103 transition-transform relative flex w-[70%] border-b border-gray-300/50 p-3"
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
			await uploadFiles(files, 'pdf_test', 'store_test');
		} else {
			alert('No PDF files were uploaded.');
		}
	}}
/>

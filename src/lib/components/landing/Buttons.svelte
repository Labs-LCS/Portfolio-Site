<script lang="ts">
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
		menuBtn.classList.add('bg-red-600/80');
		menuBtn.classList.add('border-red-800');
		menu.classList.remove('invisible');
		menu.classList.remove('scale-93');
	}

	function closeMenu() {
		menuBtn.classList.remove('rotate-45');
		menuBtn.classList.remove('bg-red-600/80');
		menuBtn.classList.remove('border-red-800');
		menu.classList.add('scale-93');
		setTimeout(() => {
			menu.classList.add('invisible');
		}, 50);
	}

	let menu: HTMLDivElement, menuBtn: HTMLButtonElement;
</script>

<div class="fixed bottom-15 right-6">
	<button
		bind:this={menuBtn}
		aria-label="Extras"
		class="flex transition-all items-center justify-center rounded-full h-12 w-12 bg-orange-600/80 text-3xl backdrop-blur-xs border border-orange-600"
		onclick={() => changeMenu()}
	>
		<svg
			class="h-8"
			fill="#000000"
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
	class="invisible scale-93 fixed tracking-wider gap-4 transition-transform bottom-30 right-6 w-[80%] md:w-[45%] lg:w-[35%] bg-black/50 backdrop-blur-xs border-orange-600 border rounded-2xl"
>
	<div
		class="h-full w-full text-white gap-4 flex flex-col items-center p-6 text-xl"
		style="font-family: 'Righteous';"
	>
		<a href="/certificates" target="_blank">Certificates</a>
		<a href="/cv" target="_blank">Curriculum</a>
		<a href="https://www.linkedin.com/in/lucas-campanh%C3%A3-342707193" target="_blank">LinkedIn</a>
		<a href="https://github.com/Labs-LCS" target="_blank">GitHub</a>
	</div>
</div>

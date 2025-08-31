<script lang="ts">
	import Separator from '../Separator.svelte';
	import PdfSection from './PdfSection.svelte';

	let aboutBtn: HTMLButtonElement,
		projectsBtn: HTMLButtonElement,
		studyBtn: HTMLButtonElement,
		duckBtn: HTMLButtonElement,
		socialBtn: HTMLButtonElement;

	let aboutAccordion: HTMLDivElement,
		projectsAccordion: HTMLDivElement,
		studyAccordion: HTMLDivElement,
		duckAccordion: HTMLDivElement,
		socialAccordion: HTMLDivElement;

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
			aboutAccordion,
			projectsAccordion,
			studyAccordion,
			duckAccordion,
			socialAccordion
		].filter((item) => item.dataset.open == 'true' && item != activeAccordion);
		accordions.forEach((item) => {
			item.classList.add('max-h-0');
			item.classList.add('overflow-hidden');
			item.previousElementSibling?.classList.remove('sticky');
			item.dataset.open = 'false';
		});
	}
</script>

<div class="text-white flex flex-col w-full select-none">
	<button
		bind:this={aboutBtn}
		class="hover:scale-99 cursor-pointer pl-3 transition-transform flex top-24 sm:top-18 backdrop-blur-xs bg-black/50 border-b border-gray-700"
		onclick={() => toggleAccordion(aboutBtn, aboutAccordion)}
	>
		<span class="text-[40px] italic text-orange-600" style="font-family: 'Righteous';"
			>About me
		</span>
		<span
			class="text-[40px] italic absolute left-3.25 top-0.25 text-blue-700"
			style="font-family: 'Righteous';">About me</span
		>
		<span class="text-[40px] italic absolute left-3.5 top-0.5" style="font-family: 'Righteous';"
			>About me</span
		>
	</button>
	<div data-open="false" bind:this={aboutAccordion} class="block max-h-0 overflow-hidden">
		<div class="text-justify">
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		</div>
	</div>

	<button
		bind:this={projectsBtn}
		class="hover:scale-99 cursor-pointer pl-3 transition-transform flex top-24 sm:top-18 backdrop-blur-xs bg-black/50 border-b border-gray-700"
		onclick={() => toggleAccordion(projectsBtn, projectsAccordion)}
	>
		<span class="text-[40px] italic text-orange-600" style="font-family: 'Righteous';"
			>Personal Projects
		</span>
		<span
			class="text-[40px] italic absolute left-3.25 top-0.25 text-blue-700"
			style="font-family: 'Righteous';">Personal Projects</span
		>
		<span class="text-[40px] italic absolute left-3.5 top-0.5" style="font-family: 'Righteous';"
			>Personal Projects</span
		>
	</button>
	<div data-open="false" bind:this={projectsAccordion} class="block max-h-0 overflow-hidden">
		<PdfSection />
		<Separator />
		<PdfSection />
	</div>

	<button
		bind:this={studyBtn}
		class="hover:scale-99 cursor-pointer pl-3 transition-transform flex top-24 sm:top-18 backdrop-blur-xs bg-black/50 border-b border-gray-700"
		onclick={() => toggleAccordion(studyBtn, studyAccordion)}
	>
		<span class="text-[40px] italic text-orange-600" style="font-family: 'Righteous';"
			>Study Journey
		</span>
		<span
			class="text-[40px] italic absolute left-3.25 top-0.25 text-blue-700"
			style="font-family: 'Righteous';">Study Journey</span
		>
		<span class="text-[40px] italic absolute left-3.5 top-0.5" style="font-family: 'Righteous';"
			>Study Journey</span
		>
	</button>
	<div data-open="false" bind:this={studyAccordion} class="block max-h-0 overflow-hidden">
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
			<PdfSection />
		</div>
	</div>

	<button
		bind:this={socialBtn}
		class="hover:scale-99 cursor-pointer pl-3 transition-transform flex top-24 sm:top-18 backdrop-blur-xs bg-black/50 border-b border-gray-700"
		onclick={() => toggleAccordion(socialBtn, socialAccordion)}
	>
		<span class="text-[40px] italic text-orange-600" style="font-family: 'Righteous';"
			>Social Media
		</span>
		<span
			class="text-[40px] italic absolute left-3.25 top-0.25 text-blue-700"
			style="font-family: 'Righteous';">Social Media</span
		>
		<span class="text-[40px] italic absolute left-3.5 top-0.5" style="font-family: 'Righteous';"
			>Social Media</span
		>
	</button>
	<div data-open="false" bind:this={socialAccordion} class="block max-h-0 overflow-hidden">
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
			<PdfSection />
		</div>
	</div>

	<button
		bind:this={duckBtn}
		class="hover:scale-99 cursor-pointer pl-3 transition-transform flex top-24 sm:top-18 backdrop-blur-xs bg-black/50 border-b border-gray-700"
		onclick={() => toggleAccordion(duckBtn, duckAccordion)}
	>
		<span class="text-[30px] text-start italic text-orange-600" style="font-family: 'Righteous';"
			>...and about the duck
		</span>
		<span
			class="text-[30px] text-start italic absolute left-3.25 top-0.25 text-blue-700"
			style="font-family: 'Righteous';">...and about the duck</span
		>
		<span
			class="text-[30px] text-start italic absolute left-3.5 top-0.5"
			style="font-family: 'Righteous';"
		>
			...and about the duck</span
		>
	</button>
	<div data-open="false" bind:this={duckAccordion} class="block max-h-0 overflow-hidden">
		<div class="text-justify">
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		</div>
	</div>
</div>

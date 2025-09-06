<script lang="ts">
	import Separator from '../Separator.svelte';
	import PdfSection from './PdfSection.svelte';
	import we from '$lib/assets/we.webp';

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
		<div class="text-justify p-3 flex flex-col gap-y-3 text-lg">
			<span
				>In a few words, I’m a self-taught fullstack programmer passionate about technology – all of
				it, but especially data analysis and software development. I’m currently transitioning into
				the tech field, studying Systems Analysis and Development at FIAP.</span
			>
			<span
				>As people who know me usually say, “Lucas studies this stuff for fun". <strong
					>And it’s true:</strong
				>
				in recent years, I’ve <strong>explored several languages</strong> (from pure C to Swift;
				from Vanilla JS to Python with Flask, etc.), <strong>many tools</strong> (from Selenium for
				WebScraping to a homemade server with NGINX, Docker, Cloudflare Tunnel, where I test my
				APIs), <strong>solved real problems</strong> (both at work and in freelancing),
				<strong>and even imaginary ones</strong> (like redesigning the main Logic Gates using only the
				simple and primitive NAND).</span
			>
			<div class="text-xl font-bold flex flex-row">
				<span>Why? Because it’s what I</span><span class="text-red-500 animate-bounce ease-in-out"
					>&nbsp;love&nbsp;</span
				>
				<span>to do.</span>
			</div>
			<span
				>So, even with a solid background (I graduated in Law at USP) and more than 7 very fruitful
				years in a field that may seem quite distant to many, I decided to dive headfirst into
				technology by starting my second degree.</span
			>
			<span>This journey will be public! I invite you to follow along here.</span>
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
		<div class="text-justify p-3 flex flex-col gap-y-3 text-lg">
			<span
				>Well, the story behind the duck is quite interesting! I'm a very hands-on person. Ever
				since I was a kid, my curiosity led me to take my toys apart, which later evolved into a
				simple philosophy: if I can fix something, I will. To this day, my friends still call me to
				borrow tools, assemble furniture, or change a shower head—a real handyman. This philosophy
				also grew into a desire to build my own things, and nothing enables that more than the world
				of programming.</span
			>

			<span
				>This is where the duck comes into the story, and it's no coincidence. On a trip to Paris, I
				came across a shop that only sold rubber ducks, which reminded me of the famous "rubber duck
				debugging" method. To my delight, I found an item that perfectly merged my passion for
				programming with my life philosophy: the DIY Duck from Budduck (an amazing store, by the
				way!).</span
			>
			<div class="flex flex-col gap-y-1 text-center items-center justify-center">
				<img
					src={we}
					alt="Me and my beloved girlfriend"
					class="border border-orange-600 inset-shadow-2xs max-w-[400px]"
				/>
				<span class="text-sm text-gray-300 italic"
					>That's me and my beloved girlfriend, who loves to cook!</span
				>
			</div>
			<span
				>The little duck embodied everything I stand for, and since then, I've decided to adopt it
				as a symbol for my personal and open-source projects.</span
			>

			<span class="text-xs text-gray-300 italic"
				>It's worth noting: all rights to the Deluxe DIY Duck belong to Budduck, which is why I
				decided to design my own logo inspired by it, rather than using the official images or
				products.</span
			>
		</div>
	</div>
</div>

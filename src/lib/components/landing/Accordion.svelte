<script lang="ts">
	import we from '$lib/assets/we.webp';
	import AboutMeSection from './AboutMeSection.svelte';
	import PdfSection from './PdfSection.svelte';
	import StudyJourneySection from './StudyJourneySection.svelte';
</script>

<div class="text-white flex flex-col w-full select-none">
	<details class="text-white flex flex-col w-full select-none">
		<summary
			class="font-family-righteous sticky hover:scale-99 cursor-pointer pl-3 transition-transform flex top-24 sm:top-18 backdrop-blur-xs bg-black/50 border-b border-gray-700"
		>
			<span class="text-[40px] italic text-orange-600">About me </span>
			<span class="text-[40px] italic absolute left-3.25 top-0.25 text-blue-700">About me</span>
			<span class="text-[40px] italic absolute left-3.5 top-0.5">About me</span>
		</summary>
		<AboutMeSection />
	</details>

	<details class="text-white flex flex-col w-full select-none">
		<summary
			class="font-family-righteous sticky hover:scale-99 cursor-pointer pl-3 transition-transform flex top-24 sm:top-18 backdrop-blur-xs bg-black/50 border-b border-gray-700"
		>
			<span class="text-[40px] italic text-orange-600">Personal Projects </span>
			<span class="text-[40px] italic absolute left-3.25 top-0.25 text-blue-700"
				>Personal Projects</span
			>
			<span class="text-[40px] italic absolute left-3.5 top-0.5">Personal Projects</span>
		</summary>
		<PdfSection />
	</details>

	<details class="text-white flex flex-col w-full select-none">
		<summary
			class="font-family-righteous sticky hover:scale-99 cursor-pointer pl-3 transition-transform flex top-24 sm:top-18 backdrop-blur-xs bg-black/50 border-b border-gray-700"
		>
			<span class="text-[40px] italic text-orange-600">Study Journey </span>
			<span class="text-[40px] italic absolute left-3.25 top-0.25 text-blue-700">Study Journey</span
			>
			<span class="text-[40px] italic absolute left-3.5 top-0.5">Study Journey</span>
		</summary>
		<StudyJourneySection />
	</details>

	<details class="text-white flex flex-col w-full select-none">
		<summary
			class="font-family-righteous sticky hover:scale-99 cursor-pointer pl-3 transition-transform flex top-24 sm:top-18 backdrop-blur-xs bg-black/50 border-b border-gray-700"
		>
			<span class="text-[30px] text-start italic text-orange-600">...and about the duck </span>
			<span class="text-[30px] text-start italic absolute left-3.25 top-0.25 text-blue-700"
				>...and about the duck</span
			>
			<span class="text-[30px] text-start italic absolute left-3.5 top-0.5"
				>...and about the duck</span
			>
		</summary>
		<div class="text-justify p-3 flex flex-col gap-y-3 text-lg">
			<div class="flex flex-col text-white gap-x-4 items-center px-2">
				<div class="flex flex-col md:max-w-[80%] gap-y-2">
					<span>Well, the story behind the duck is quite interesting!</span><span
						>I'm a very hands-on person. Ever since I was a kid, my curiosity led me to take my toys
						apart, which later evolved into a simple philosophy: if I can fix something, I will. To
						this day, my friends still call me to borrow tools, assemble furniture, or change a
						shower head—a real handyman. This philosophy also grew into a desire to build my own
						things, and nothing enables that more than the world of programming.</span
					>

					<span
						>This is where the duck comes into the story, and it's no coincidence. On a trip to
						Paris, I came across a shop that only sold rubber ducks, which reminded me of the famous
						"rubber duck debugging" method. To my delight, I found an item that perfectly merged my
						passion for programming with my life philosophy: the DIY Duck from Budduck (an amazing
						store, by the way!).</span
					>
					<div class="flex flex-col gap-y-1 text-center items-center justify-center">
						<img
							src={we}
							alt="Me and my beloved girlfriend"
							class="border border-orange-600 inset-shadow-2xs max-sm:max-w-[70dvw] py-3"
						/>
						<span class="text-sm text-gray-300 italic"
							>That's me and my beloved girlfriend, who loves to cook!</span
						>
					</div>
					<span
						>The little duck embodied everything I stand for, and since then, I've decided to adopt
						it as a symbol for my personal and open-source projects.</span
					>

					<span class="text-xs text-gray-300 italic"
						>It's worth noting: all rights to the Deluxe DIY Duck belong to Budduck, which is why I
						decided to design my own logo inspired by it, rather than using the official images or
						products.</span
					>
				</div>
			</div>
		</div>
	</details>
</div>

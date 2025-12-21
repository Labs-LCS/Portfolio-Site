<script lang="ts">
	import AboutMeSection from './AboutMeSection.svelte';
	import PdfSection from './PdfSection.svelte';
	import StudyJourneySection from './StudyJourneySection.svelte';
	import AboutTheDuck from './AboutTheDuck.svelte';
</script>

<div class="text-white flex flex-col w-full select-none">
	<details class="select-none" open>
		<summary
			class="font-family-righteous sticky hover:scale-99 cursor-pointer pl-3 top-29 sm:top-19 backdrop-blur-xs bg-black/50 border-b border-gray-700 list-none"
		>
			<h3 class="text-[40px] italic text-orange-600">About me</h3>
			<h3 class="text-[40px] italic absolute left-3.25 top-px text-blue-700">About me</h3>
			<h3 class="text-[40px] italic absolute left-3.5 top-0.5">About me</h3>
		</summary>
		<AboutMeSection />
	</details>

	<details class="select-none" open>
		<summary
			class="font-family-righteous sticky hover:scale-99 cursor-pointer pl-3 top-29 sm:top-19 backdrop-blur-xs bg-black/50 border-b border-gray-700 list-none"
		>
			<h3 class="text-[40px] italic text-orange-600">Personal Projects</h3>
			<h3 class="text-[40px] italic absolute left-3.25 top-px text-blue-700">Personal Projects</h3>
			<h3 class="text-[40px] italic absolute left-3.5 top-0.5">Personal Projects</h3>
		</summary>
		<PdfSection />
	</details>

	<details class="select-none" open>
		<summary
			class="font-family-righteous sticky hover:scale-99 cursor-pointer pl-3 top-29 sm:top-19 backdrop-blur-xs bg-black/50 border-b border-gray-700 list-none"
		>
			<h3 class="text-[40px] italic text-orange-600">Study Journey</h3>
			<h3 class="text-[40px] italic absolute left-3.25 top-px text-blue-700">Study Journey</h3>
			<h3 class="text-[40px] italic absolute left-3.5 top-0.5">Study Journey</h3>
		</summary>
		<StudyJourneySection />
	</details>

	<details class="select-none" open>
		<summary
			class="font-family-righteous sticky hover:scale-99 cursor-pointer pl-3 top-29 sm:top-19 backdrop-blur-xs bg-black/50 border-b border-gray-700 list-none"
		>
			<h3 class="text-[30px] text-start italic text-orange-600">...and about the duck</h3>
			<h3 class="text-[30px] text-start italic absolute left-3.25 top-px text-blue-700">
				...and about the duck
			</h3>
			<h3 class="text-[30px] text-start italic absolute left-3.5 top-0.5">...and about the duck</h3>
		</summary>
		<AboutTheDuck />
	</details>
</div>

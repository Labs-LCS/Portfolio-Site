<script>
	import Separator from '../Separator.svelte';
</script>

<div class="flex justify-center relative select-none pt-10">
	<div class="absolute w-full top-20 sm:top-26 md:top-45 transition-all duration-600">
		<Separator />
	</div>
	<div
		class="flex cursor-pointer text-center text-white/50 justify-center items-center text-3xl md:text-4xl transition-all duration-600 hover:bg-orange-600/10 hover:text-orange-600/85 backdrop-blur-xs bg-black/5 h-50 w-[80%] sm:h-60 md:h-100 md:w-180 rounded-2xl border border-white/40 hover:border-orange-600 inset-shadow-2xs inset-shadow-gray-400"
		style="font-family: 'Righteous';"
	>
		Drop your files or click here
	</div>
</div>

<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import me from '$lib/assets/me.webp';

	let landing = page.route.id == '/';
	let h1 = landing ? 'Labs.LCS - Projects' : 'PDF Editor';
	let h2 = landing ? 'Developed by Lucas Campanhã dos Santos' : 'by Lucas Campanhã';
</script>

<header
	class={[
		'z-99 fixed top-0 w-full flex max-sm:flex-wrap justify-between p-4 backdrop-blur-xs border-b border-gray-700 select-none gap-x-2 text-white',
		page.route.id == '/pdf' ? 'bg-black/50' : 'bg-black/80'
	]}
>
	<div class="flex space-x-4">
		<img class="h-11" src="/icons/labs-lcs.webp" alt="Labs-LCS Logomark" />
		<div>
			<h1 class="text-xl tracking-wider font-family-righteous">{h1}</h1>
			<h2 class="text-xs italic">{h2}</h2>
		</div>
	</div>
	{#if page.route.id == '/'}
		<nav class="flex justify-evenly max-sm:w-full sm:gap-6 sm:mr-4 font-extralight mt-4">
			<a class="cursor-pointer hover:text-orange-600" href={resolve('/pdf')} target="_blank"
				>PDF Editor</a
			>
			<a
				class="cursor-pointer hover:text-orange-600"
				href="https://labs-lcs-server.com"
				target="_blank">Labs Server</a
			>
		</nav>
	{:else if page.route.id == '/pdf'}
		<img
			src={me}
			alt="Me"
			class="rounded-full h-12 w-12 object-cover border border-orange-600 shadow-sm shadow-blue-600/80"
		/>
	{/if}
</header>

<script lang="ts">
	import me from '$lib/assets/me.webp';
	import Separator from '../Separator.svelte';
</script>

<div class="flex items-center justify-center">
	<div class="flex p-3 w-full justify-center">
		<div class="flex w-full sm:w-[75%] sm:max-w-[800px] rounded-md p-3">
			<div
				class="font-family-righteous relative flex flex-col sm:flex-row gap-4 tracking-wider justify-center items-center"
			>
				<div class="absolute w-dvw bottom-[65%] sm:bottom-[17%] blur-xs">
					<Separator />
				</div>
				<img
					src={me}
					alt="Me"
					class="z-10 rounded-full h-40 w-40 object-cover border border-orange-600 shadow-sm shadow-blue-600/80"
				/>
				<div class="z-10 flex flex-col gap-2 justify-center">
					<div
						class="backdrop-blur-xs h-fit w-fit p-2 border border-orange-600 rounded-2xl rounded-bl-none"
					>
						<span class="font-medium text-gray-300"> Hi! I'm Lucas! </span>
					</div>
					<div
						class="backdrop-blur-xs bg-black/30 h-fit w-fit p-2 border border-orange-600 rounded-2xl rounded-l-none"
					>
						<span class="font-medium text-gray-300">
							I'm a self-taught software developer currently specializing in the backend area @FIAP.
						</span>
					</div>
					<div
						class="backdrop-blur-xs h-fit w-fit p-2 border border-orange-600 rounded-2xl rounded-tl-none"
					>
						<span class="font-medium text-gray-300">
							Welcome to my self-documented learning journey.
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

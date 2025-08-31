<script>
	let currentFile = 'example.pdf';
	let fileSize = '10 MB';
</script>

<div
	class="max-md:hidden z-98 fixed bottom-6 p-4 left-[52%] flex m-4 bg-black/10 backdrop-blur-xs rounded-2xl h-20 w-[calc(50dvw-150px)] border border-black/10"
>
	<div
		class="transition-transform flex w-full h-full border border-black/10 rounded-lg bg-white/20 overflow-scroll"
	>
		<div class="flex w-full items-center justify-around italic text-gray-500">
			<span>Current file: {currentFile}</span>
			<span>File size: {fileSize}</span>
		</div>
	</div>
</div>

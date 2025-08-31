<div class="flex flex-col text-white lg:flex-row gap-x-4 items-center gap-y-4">
	<div class="shrink-0">
		<img src="https://picsum.photos/500/300" alt="" />
	</div>
	<div class="flex md:max-w-[80%] sm:p-4">
		<p>
			<span class="flex max-sm:flex-col max-sm:text-center py-2 sm:pb-2 gap-x-1 text-justify">
				<b>&#9998; Privacy-Focused PDF Editor</b> for Legal Professionals<br />
			</span>

			<span class="block text-justify"
				>This is a browser-based PDF editor designed with the privacy needs of Brazilian lawyers in
				mind. The project delivers a simple yet comprehensive interface tailored for common legal
				document operations such as merging, reordering, deleting, and annotating PDFs. <br />Aside
				from authentication (handled via <b>Firebase</b>), the entire application runs client-side,
				with routing being handled via <b>SvelteKit</b>. It uses the browser’s <b>IndexedDB</b> for
				local file storage, ensuring that no documents are uploaded or stored on external servers —
				preserving full user privacy. <br />Initially deployed on <b>Cloudflare</b>, the project was
				later migrated to Vercel to support potential <b>Node.js</b> enhancements. PDF rendering is
				powered by Mozilla’s PDF.js, while core document operations (merge, delete, reorder) are
				handled by MuPDF compiled to <b>WebAssembly</b> — a deliberate choice for performance and
				device compatibility. Using a C-based engine via WASM ensures fast processing even on
				lower-end machines, unlike JavaScript-only libraries. <br />To maximize performance and
				maintain minimal overhead, I built the frontend with <b>Svelte</b> — a compiler rather than a
				runtime framework. This allowed for efficient state management and fast load times. The first
				version of this project was developed with vanilla JavaScript and PDF-Lib.js as a learning experience,
				before evolving into a more robust and scalable solution.</span
			>
		</p>
	</div>
</div>

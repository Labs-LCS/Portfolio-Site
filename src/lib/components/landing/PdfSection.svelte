<script>
	let readMore = $state('Read more');
</script>

<div class="text-justify p-3 flex flex-col gap-y-3 text-lg">
	<div class="flex flex-col text-white gap-x-4 items-center gap-y-2">
		<img src="/pdf_editor_2.webp" alt="Screenshot" class="w-200" />
		<div class="flex md:max-w-[80%] px-2">
			<div>
				<span class="font-family-righteous tracking-wider text-orange-500 italic">
					<b>&#9998; Privacy-Focused PDF Editor</b> for Legal Professionals
				</span>

				<div class="flex flex-col text-justify gap-y-3 py-3">
					<span
						>This is a browser-based PDF editor designed with the privacy needs of Brazilian lawyers
						in mind. The project delivers a simple yet comprehensive interface tailored for common
						legal document operations such as merging, reordering, deleting, and annotating PDFs.</span
					>
					<details>
						<summary
							onclick={() => (readMore = readMore === 'Read more' ? 'Read less' : 'Read more')}
							class="font-family-righteous">{readMore}</summary
						>
						<div class="flex flex-col text-justify gap-y-3">
							<span>
								The initial architecture was designed for a truly serverless environment, utilizing
								a simple Single-Page Application (SPA) schema within SvelteKit, which was achieved
								through static site prerendering.
							</span>
							<span
								>While the serverless approach offers a clear and secure method for handling
								documents and user data without storing them, it presents significant limitations.
								Consequently, I am transitioning the application to a self-hosted server, migrating
								the JavaScript logic to the backend.</span
							><span>
								I acknowledge the potential security implications this transition could introduce
								for end-users. Therefore, access to the current project is restricted to a small
								group of test users until these security concerns are fully addressed.
							</span><span>
								The original client-side-only version of the project remains accessible by cloning
								the repository from the following URL:
								<a
									href="https://github.com/Labs-LCS/svelte-labs_lcs-pdf"
									class="underline text-orange-600"
									>https://github.com/Labs-LCS/svelte-labs_lcs-pdf</a
								>
							</span><span
								class="text-xl font-family-righteous tracking-wider text-orange-500 italic"
							>
								– Technical aspects (client-side version)
							</span><span
								>Aside from authentication (handled via <b>Firebase</b>), the entire application
								runs client-side, with routing being handled via <b>SvelteKit</b>. It uses the
								browser’s
								<b>IndexedDB</b>
								for local file storage, ensuring that no documents are uploaded or stored on external
								servers — preserving full user privacy.
							</span><span
								>Initially deployed on
								<b>Cloudflare</b>, the project was later migrated to Vercel to support potential
								<b>Node.js</b>
								enhancements. PDF rendering is powered by Mozilla’s PDF.js, while core document operations
								(merge, delete, reorder) are handled by MuPDF compiled to <b>WebAssembly</b> — a deliberate
								choice for performance and device compatibility. Using a C-based engine via WASM ensures
								fast processing even on lower-end machines, unlike JavaScript-only libraries.
							</span><span
								>To maximize performance and maintain minimal overhead, I built the frontend with <b
									>Svelte</b
								> — a compiler rather than a runtime framework. This allowed for efficient state management
								and fast load times. The first version of this project was developed with vanilla JavaScript
								and PDF-Lib.js as a learning experience, before evolving into a more robust and scalable
								solution.</span
							>
						</div>
					</details>
				</div>
			</div>
		</div>
	</div>
</div>

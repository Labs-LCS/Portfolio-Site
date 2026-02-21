<script>
	import Separator from '$lib/components/Separator.svelte';
	let readMore = $state('Read more');
</script>

<img src="/pdf_editor_2.webp" alt="Screenshot" class="w-200 mx-auto" />

<h3 class="font-family-righteous tracking-wider italic text-center mb-4">
	Privacy-Focused PDF Editor for Legal Professionals
</h3>

<div
	class="w-full text-justify p-6 pt-0 pb-0 md:max-w-prose md:flex md:flex-col md:mx-auto md:text-xl"
>
	<p>
		This is a browser-based PDF editor designed with the privacy needs of Brazilian lawyers in mind.
		The project delivers a simple yet comprehensive interface tailored for common legal document
		operations such as merging, reordering, deleting, and annotating PDFs.
	</p>

	<details class="space-y-4">
		<summary
			onclick={() => (readMore = readMore === 'Read more' ? 'Read less' : 'Read more')}
			class="font-family-righteous mt-4 cursor-pointer">{readMore}</summary
		>
		<p>
			The initial architecture was designed for a truly serverless environment, utilizing a simple
			Single-Page Application (SPA) schema within SvelteKit, which was achieved through static site
			prerendering.
		</p>
		<p>
			While the serverless approach offers a clear and secure method for handling documents and user
			data without storing them, it presents significant limitations. Consequently, I am
			transitioning the application to a self-hosted server, migrating the JavaScript logic to the
			backend.
		</p>
		<p>
			I acknowledge the potential security implications this transition could introduce for
			end-users. Therefore, access to the current project is restricted to a small group of test
			users until these security concerns are fully addressed.
		</p>
		<p>
			The original client-side-only version of the project remains accessible by cloning the
			repository from the following URL:
			<a href="https://github.com/Labs-LCS/svelte-labs_lcs-pdf" class="underline text-orange-600"
				>https://github.com/Labs-LCS/svelte-labs_lcs-pdf</a
			>
		</p>
		<h4 class="text-xl font-family-righteous tracking-wider italic text-center">
			Technical aspects
		</h4>
		<p>
			Aside from authentication (handled via <b>Firebase</b>), the entire application runs
			client-side, with routing being handled via <b>SvelteKit</b>. It uses the browser’s
			<b>IndexedDB</b>
			for local file storage, ensuring that no documents are uploaded or stored on external servers —
			preserving full user privacy.
		</p>
		<p>
			Initially deployed on
			<b>Cloudflare</b>, the project was later migrated to Vercel to support potential
			<b>Node.js</b>
			enhancements. PDF rendering is powered by Mozilla’s PDF.js, while core document operations (merge,
			delete, reorder) are handled by MuPDF compiled to <b>WebAssembly</b> — a deliberate choice for performance
			and device compatibility. Using a C-based engine via WASM ensures fast processing even on lower-end
			machines, unlike JavaScript-only libraries.
		</p>
		<p>
			To maximize performance and maintain minimal overhead, I built the frontend with <b>Svelte</b> —
			a compiler rather than a runtime framework. This allowed for efficient state management and fast
			load times. The first version of this project was developed with vanilla JavaScript and PDF-Lib.js
			as a learning experience, before evolving into a more robust and scalable solution.
		</p>
	</details>
</div>

<Separator />

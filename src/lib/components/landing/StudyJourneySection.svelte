<script>
	import Separator from '../Separator.svelte';
</script>

<div class="text-justify p-3 flex flex-col gap-y-3 text-lg">
	<div class="flex flex-col text-white gap-x-4 items-center gap-y-2">
		<div class="flex flex-col md:max-w-[80%] px-2">
			<div>
				<span class="text-2xl font-family-righteous tracking-wider text-orange-500 italic">
					<b> Completed Courses </b></span
				>

				<div class="flex flex-col text-justify gap-y-6 py-3">
					<span
						><strong>☆ API Patterns: From HTTP to API modeling </strong><br />
						<a
							class="underline text-orange-400 hover:text-orange-500"
							href="https://cursos.alura.com.br/formalCertificate/95ddfa7f-383e-4d11-ad72-723d99f2b5e0"
							target="_blank"
							rel="noopener noreferrer"
						>
							Certification
						</a>
					</span>
					<span
						><strong>☆ NGINX: Web server, Reverse Proxy, and API Gateway </strong><br />
						<a
							class="underline text-orange-400 hover:text-orange-500"
							href="https://cursos.alura.com.br/formalCertificate/f2172ea8-1963-4a6a-9a6e-4faaacb5ffbc"
							target="_blank"
							rel="noopener noreferrer"
						>
							Certification
						</a><br />- Where I used it: I created a home server (https://labs-lcs-server.com/),
						currently in production, where I will eventually host my APIs. I'm building it with
						Docker + Ubuntu Server.
					</span>

					<span>
						<strong>☆ Git and GitHub: sharing and collaborating on projects </strong><br />
						<a
							class="underline text-orange-400 hover:text-orange-500"
							href="https://cursos.alura.com.br/formalCertificate/1b1a64e7-3397-41f8-90da-76982cbffeca"
							target="_blank"
							rel="noopener noreferrer"
						>
							Certification
						</a><br />- Where I used it: I created a home server (https://labs-lcs-server.com/),
						currently in production, where I will eventually host my APIs. I'm building it with
						Docker + Ubuntu Server.
					</span>
				</div>
			</div>
		</div>

		<Separator />
		<img src="/nand2tetris_3.webp" alt="Screenshot" class="w-200" />
		<div class="flex flex-col md:max-w-[80%] px-2">
			<div>
				<span class="text-2xl font-family-righteous tracking-wider text-orange-500 italic">
					<b>☆ Ongoing: Nand2Tetris </b></span
				>

				<div class="flex flex-col text-justify gap-y-3 py-3">
					<span
						>This project is part of my ongoing participation in the Nand2Tetris course, which
						explores the entire hierarchy of computer systems — from basic logic gates to a
						functioning operating system and compiler.</span
					><span>
						I'm taking this course to gain a deeper and more practical understanding of how
						computers work at every level. By building these foundations from first principles, I
						aim to move beyond dependency on high-level abstractions and frameworks.</span
					><span>
						This approach supports more informed decision-making when designing complex systems, and
						fosters a stronger, more independent problem-solving mindset.</span
					><span
						>GitHub Repository: <a
							class="underline text-orange-400 hover:text-orange-500"
							href="https://github.com/Labs-LCS/NAND2Tetris"
							>https://github.com/Labs-LCS/NAND2Tetris</a
						></span
					>
				</div>
			</div>
		</div>
		<Separator />
		<img src="/DSAinC_3.webp" alt="Screenshot" class="w-200 py-5" />
		<div class="flex flex-col md:max-w-[80%] px-2">
			<div>
				<span class="text-2xl font-family-righteous tracking-wider text-orange-500 italic">
					<b>☆ Ongoing: DSA in C Programming Language</b></span
				>

				<div class="flex flex-col text-justify gap-y-3 py-3">
					<span
						>This project consists of ongoing implementations of essential data structures and
						algorithms in the C programming language.</span
					><span
						>The focus is on exploring core computer science concepts at a low level, with attention
						to memory management, performance characteristics, and algorithmic design. By avoiding
						high-level abstractions, the project emphasizes a clearer understanding of how data
						structures operate in memory and how algorithms interact with system resources.
					</span><span
						>The use of C allows for fine-grained control and provides a foundation for applying
						these concepts in performance-critical or resource-constrained environments.</span
					><span
						>GitHub Repository: <a
							class="underline text-orange-400 hover:text-orange-500"
							href="https://github.com/Labs-LCS/DSA_in_C">https://github.com/Labs-LCS/DSA_in_C</a
						></span
					>
				</div>
			</div>
		</div>
		<Separator />
	</div>
</div>

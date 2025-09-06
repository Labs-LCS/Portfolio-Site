import { PDFObject } from './classes.svelte';

export async function uploadFiles(files: FileList) {
	try {
		const filesArray = Array.from(files);
		filesArray.forEach((file) => {
			if (file.type === 'application/pdf') {
				const pdf = PDFObject.createFromFile(file, 'pdf_db', 'main_store');
				console.log(pdf);
			}
		});
	} catch (error) {
		console.error(error);
	}
}

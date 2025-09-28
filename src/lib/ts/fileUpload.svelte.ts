import { openDB } from 'idb';
import { RemotePDFObject } from './classes.svelte';

export async function initializeIDB(databaseName: string, storeName: string) {
	const db = await openDB(databaseName, 1, {
		upgrade(_db) {
			_db.createObjectStore(storeName);
		}
	});
	const tx = db.transaction(storeName, 'readwrite');
	await tx.objectStore(storeName).clear();
	await tx.done;
}

export async function uploadFiles(files: FileList) {
	try {
		const filesArray = Array.from(files);
		filesArray.forEach(async (file) => {
			if (file.type === 'application/pdf') {
				await RemotePDFObject.createFromFile(file);
			}
		});
	} catch (error) {
		console.error(error);
	}
}

import { openDB } from 'idb';
import { RemotePDFObject } from './classes.svelte';
import { remoteItems } from './globalVariables.svelte';

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
		for (let i = 0; i < filesArray.length; i++) {
			if (filesArray[i].type === 'application/pdf') {
				console.log(filesArray[i]);
				const newFile = await RemotePDFObject.createFromFile('identificador', filesArray[i]);
				remoteItems.push(newFile);
			}
		}
	} catch (error) {
		console.error(error);
	}
}

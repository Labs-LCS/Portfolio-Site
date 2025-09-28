// import { openDB } from 'idb';

// class IndexedDB {
//   database = "pdf_local_db";
//   store = "main";
// }

// let idb = new IndexedDB();

export class BackgroundColor {
	hexColor = $state('#000000');
}

interface PDFObjectProps {
	id: number;
	uuid: string;
	original_filename: string;
	stored_filename: number;
	file_size_bytes: number;
	mime_type: string;
	page_count: number;
	tags: string[];
	cover_id: number;
	created_at: string;
}

export class RemotePDFObject {
	id: number;
	uuid: string;
	original_filename: string;
	stored_filename: number;
	file_size_bytes: number;
	mime_type: string;
	page_count: number;
	tags: string[];
	cover_id: number;
	created_at: string;

	private constructor(props: PDFObjectProps) {
		this.id = $state(props.id);
		this.uuid = $state(props.uuid);
		this.original_filename = $state(props.original_filename);
		this.stored_filename = $state(props.stored_filename);
		this.file_size_bytes = $state(props.file_size_bytes);
		this.mime_type = $state(props.mime_type);
		this.page_count = $state(props.page_count);
		this.tags = $state(props.tags);
		this.cover_id = $state(props.cover_id);
		this.created_at = $state(props.created_at);
	}

	// private async storeInLocalDB() {
	// try {

	// } catch (error) {
	// 	console.error(error);
	// }
	// }

	// public async storeInDB(buffer: ArrayBuffer) {
	// 	try {

	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }
	// private async deleteFromLocalDB() {

	// }

	// public async deleteFromDB() {
	// 	try {

	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }

	// public async getBuffer() {
	// 	try {

	// 		return buffer;
	// 	} catch (error) {
	// 		console.error(error);
	// 		return null;
	// 	}
	// }

	public static async createFromFile(_file: File, _tags: string[] = ['pdf']) {
		try {
			const formData = new FormData();
			formData.append('file', _file);

			const tags = _tags;
			formData.append('tags', JSON.stringify(tags));

			const response = await fetch('/api/pdfs', {
				method: 'POST',
				body: formData
			});

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.detail || `Failed to upload ${_file.name}`);
			}

			const serverProps: RemotePDFObject = await response.json();

			const pdfInstance = new RemotePDFObject(serverProps);

			console.log(pdfInstance);
			return pdfInstance;
		} catch (error) {
			throw new Error(String(error));
		}
	}
}

import { openDB } from 'idb';
import { PDFDocument } from 'mupdf';

export class BackgroundColor {
	hexColor = $state('#000000');
}

interface PDFObjectProps {
	id: string;
	database: string;
	store: string;
	size: number;
	pages?: number;
	pagesArray?: number[];
	name: string;
	hasCover?: boolean;
	coverId?: string;
	tag?: string;
	selected?: boolean;
}

async function storeFileInIDB(
	_buffer: ArrayBuffer,
	_database: string,
	_store: string,
	_id: string
) {
	try {
		const db = await openDB(_database);
		await db.add(_store, _buffer, _id);
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
}

export class PDFObject {
	id = $state('');
	database = $state('');
	store = $state('');
	size = $state(0);
	pages? = $state(0);
	pagesArray? = $state([0]);
	name = $state('');
	hasCover? = $state(false);
	coverId? = $state('');
	tag? = $state('');
	selected? = $state(false);

	private constructor(props: PDFObjectProps) {
		this.id = props.id;
		this.database = props.database;
		this.store = props.store;
		this.size = props.size;
		this.pages = props.pages;
		this.pagesArray = props.pagesArray;
		this.name = props.name;
		this.hasCover = props.hasCover;
		this.coverId = props.coverId;
		this.tag = props.tag;
		this.selected = props.selected;
	}

	public async getFileFromIDB() {
		try {
			const db = await openDB(this.database);
			const buffer: ArrayBuffer = await db.get(this.store, this.id);
			return buffer;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	public async deleteFileFromIDB() {
		try {
			const db = await openDB(this.database);
			await db.delete(this.store, this.id);
			if (this.hasCover && this.coverId) {
				await db.delete(this.store, this.coverId);
			}
			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	}

	public static async createFromFile(_file: File, _database: string, _store: string) {
		try {
			const buffer = await _file.arrayBuffer(),
				id = `${Date.now() + _file.size}`,
				pages = PDFDocument.openDocument(buffer).countPages();

			const wasStored = await storeFileInIDB(buffer, _database, _store, id);

			if (!wasStored) {
				throw new Error('Failed to store the PDF buffer in IndexedDB.');
			}

			const pdfInstance = new PDFObject({
				id: id,
				database: _database,
				store: _store,
				size: _file.size,
				pages: pages,
				pagesArray: [...Array(pages).keys()],
				name: _file.name,
				hasCover: false,
				coverId: '',
				tag: '',
				selected: false
			});

			return pdfInstance;
		} catch (error) {
			console.error(error);
		}
	}
}

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

export class PDFObject {
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

	private constructor(props: PDFObjectProps) {
		this.id = $state(props.id);
		this.database = $state(props.database);
		this.store = $state(props.store);
		this.size = $state(props.size);
		this.pages = $state(props.pages);
		this.pagesArray = $state(props.pagesArray);
		this.name = $state(props.name);
		this.hasCover = $state(props.hasCover);
		this.coverId = $state(props.coverId);
		this.tag = $state(props.tag);
		this.selected = $state(props.selected);
	}

	public async getBufferFromIDB() {
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

	public async storeFileInIDB(buffer: ArrayBuffer) {
		try {
			const db = await openDB(this.database);
			await db.add(this.store, buffer, this.id);
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

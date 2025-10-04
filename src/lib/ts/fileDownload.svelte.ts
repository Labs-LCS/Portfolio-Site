export async function downloadFileFromServer(uniqueId: string) {
	uniqueId = 'f86f0d37-53b0-4dd7-8593-481d8689b010';
	await fetch(`/api/pdfs/${uniqueId}`, {
		method: 'GET'
	})
		.then((response) => {
			return response.blob();
		})
		.then((blob) => {
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = 'fromServer.pdf';
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
		})
		.catch((error) => {
			console.error('Download failed:', error);
		});
}

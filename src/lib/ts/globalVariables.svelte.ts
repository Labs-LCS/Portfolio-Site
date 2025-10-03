/* eslint-disable prefer-const */

import { BackgroundColor, RemotePDFObject } from './classes.svelte';

export { bgColor, remoteItems };

let bgColor = new BackgroundColor();

let remoteItems: RemotePDFObject[] = $state([]);

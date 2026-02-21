<script lang="ts">
	import Buttons from '$lib/components/pdf/Buttons.svelte';
	import ItemsView from '$lib/components/pdf/items/ItemsView.svelte';
	import Workbench from '$lib/components/pdf/Workbench.svelte';
</script>

<div class="z-999 fixed top-20 bg-orange-400/80 w-full text-center font-family-righteous">
	This is just a visual demo. If you need access to the basic PDF editing functionalities, please go
	to
	<a href="https://pdf-client-side.vercel.app/pdf_editor" class="underline">this link</a>
</div>

<ItemsView />
<Workbench />
<Buttons />

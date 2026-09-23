<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
    import { actualizarSong, trackState } from '$lib/store/cancion.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

{#if trackState.song}
<footer class="bg-indigo-400 sticky bottom-0 px-10 py-4 flex items-center gap-4">

	<div class="w-20 h-20">
	<img src="{trackState.song.album.image}" alt="">
    </div>

    <div>
	<p>{trackState.song.title}</p>
	<p>{trackState.song.album.title}</p>
    </div>

</footer>
	
{/if}



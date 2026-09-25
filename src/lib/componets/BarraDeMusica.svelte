<script>
    import { actualizarSong, trackState } from "$lib/store/cancion.svelte";

</script>

{#if trackState.song}
<footer class="bg-indigo-600 text-emerald-50 sticky bottom-0 px-10 py-4 flex items-center gap-4">

	<div class="w-20 h-20">
	<img src="{trackState.song.album.image}" alt="">
    </div>

    <div>
	<p>{trackState.song.title}</p>
	<p>{trackState.song.album.title}</p>
    </div>

    <div>
        <audio src="{trackState.song.audio}" controls></audio>
    </div>

</footer>
	
{/if}
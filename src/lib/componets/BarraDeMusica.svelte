<script>
    import { actualizarSong, trackStore } from "$lib/store/cancion.svelte";

</script>

{#if trackStore.song}
<footer class="bg-indigo-600 text-emerald-50 sticky bottom-0 px-10 py-4 flex items-center gap-4">

	<div class="w-20 h-20">
	<img src="{trackStore.song.album.image}" alt="">
    </div>

    <div>
	<p>{trackStore.song.title}</p>
	<p>{trackStore.song.album.title}</p>
    </div>

    <div>
        <audio src="{trackStore.song.audio}" controls></audio>
    </div>

</footer>
	
{/if}
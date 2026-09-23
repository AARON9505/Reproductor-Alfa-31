<script>
    import { actualizarSong } from "$lib/store/cancion.svelte";

    const { track } = $props()

    const handlerClick = () => {
        // La interaccion para que suene
        actualizarSong(track)
    }
</script>

<button onclick={handlerClick}>
<div class=" bg-indigo-800 text-mist-950 flex items-center gap-3 px-2 pt-10">
    <img src="{track.album.image}" alt="" class="rounded-full w-30">
    <div class="bg-indigo-800">
        <p>{track.title}</p>
        <p>{track.album.title}</p>
    </div>
</div>
</button>
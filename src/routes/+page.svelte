<script>
    import TarjetaCancion from "$lib/componets/TarjetaCancion.svelte";
    import axios from "axios";
    import Icon from "@iconify/svelte";

    const ListaMusical = axios.get("https://leonardoapi.vercel.app/api/tracks");
</script>

<p class="bg-indigo-800 text-3xl flex justify-center">ORIGIN MUSIC</p>

<div class="bg-indigo-800 text-2xl flex flex-col">
    <div class="flex items-center">
        <Icon icon="bi:compass" />
        <p class="bg-indigo-800">browse</p>
    </div>

    <div class="flex items-center">
        <Icon icon="bi:stars" />
        <p>Discover</p>
    </div>

    <div class="flex items-center">
        <Icon icon="gravity-ui:books" />
        <p>library</p>    
    </div>

    <div class="flex items-center">
        <Icon icon="ic:baseline-queue-music" />
        <p>playlist</p>
    </div>
</div>

{#await ListaMusical}
    <button type="button" class="bg-indigo-500 ..." disabled>
        <svg class="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
            <!-- ... -->
        </svg>
        Cargando...
    </button>
{:then ListaMusical}
    <div class="flex flex-col">
        {#each ListaMusical.data.tracks as track}
            <TarjetaCancion {track}></TarjetaCancion>
        {/each}
    </div>
{/await}

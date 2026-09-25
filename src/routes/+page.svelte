<script>
    import TarjetaCancion from "$lib/componets/TarjetaCancion.svelte";
    import Icon from "@iconify/svelte";

    const { data } = $props();
    const tracks = $derived(data?.tracklist ?? []);

</script>

<div class="min-h-screen bg-slate-950 p-6 text-white">
    <header
        class="animated-shadow mb-8 border-2 border-indigo-400 bg-indigo-950 p-5"
        style="--shadow-color: #7c3aed"
    >
        <h1 class="text-center text-3xl font-bold tracking-widest">
            ORIGIN MUSIC
        </h1>
    </header>

    <nav class="mb-8 flex flex-wrap gap-3">
        {#each [{ icon: "bi:compass", label: "Browse" }, { icon: "bi:stars", label: "Discover" }, { icon: "gravity-ui:books", label: "Library" }, { icon: "ic:baseline-queue-music", label: "Playlist" }] as item}
            <div
                class="animated-shadow flex items-center gap-2 border-2 border-cyan-400 bg-slate-900 px-4 py-3"
                style="--shadow-color: #0891b2"
            >
                <Icon icon={item.icon} />
                <span>{item.label}</span>
            </div>
        {/each}
    </nav>

    <main class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section
            class="animated-shadow border-2 border-fuchsia-400 bg-slate-900 p-4"
            style="--shadow-color: #c026d3"
        >
            <h2 class="mb-4 text-xl font-bold">Canciones</h2>
            <div class="flex flex-col gap-3">
                {#each tracks as track, i (track.id ?? i)}
                    <TarjetaCancion {track} />
                {/each}
            </div>
        </section>

        <section
            class="animated-shadow border-2 border-cyan-400 bg-slate-900 p-4"
            style="--shadow-color: #0891b2"
        >
            <h2 class="mb-4 text-xl font-bold">Álbumes</h2>
            <div class="grid grid-cols-2 gap-4">
                {#each data.albumslist as album}
                    <div
                        class="border-2 border-slate-600 bg-slate-800 p-2"
                        style="--shadow-color: #334155"
                    >
                        <img
                            src={album.image}
                            alt={"Portada de " + album.title + ' álbum'}
                            class="aspect-square w-full object-cover"
                        />
                    </div>
                {/each}
            </div>
        </section>
    </main>
</div>

<style>
    .animated-shadow {
        animation: colored-shadow 2.5s ease-in-out infinite;
    }

    @keyframes colored-shadow {
        0%,
        100% {
            box-shadow: 5px 5px 0 var(--shadow-color);
        }

        50% {
            box-shadow:
                9px 9px 0 var(--shadow-color),
                0 0 16px var(--shadow-color);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .animated-shadow {
            animation: none;
            box-shadow: 5px 5px 0 var(--shadow-color);
        }
    }
</style>

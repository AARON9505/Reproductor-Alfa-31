<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
    import { actualizarSong, trackState } from '$lib/store/cancion.svelte';
    import BarraDeMusica from '$lib/componets/BarraDeMusica.svelte';
	
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}


<BarraDeMusica />


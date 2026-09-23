 export const trackState = $state({
    song: null
})

 export const actualizarSong = (NuevaCancion) => {
    trackState.song = NuevaCancion
}
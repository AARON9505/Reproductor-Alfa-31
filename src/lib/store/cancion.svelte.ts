
 export interface Song {
    title: string
    album: {
        title: string
        image: string
        thumbnail: string
    }
    artist: {
        name: string
        image: string
        thumbnail: string
    }
    audio: string

}

export const trackStore = $state<{
    song: null  | Song
}>({
    song: null
})

export const actualizarSong = (newsong: Song) => {
    trackStore.song = newsong
}

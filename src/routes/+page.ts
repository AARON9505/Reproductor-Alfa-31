import axios from "axios"
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const ListaMusical = await axios.get("https://leonardoapi.vercel.app/api/tracks");

    const ListaAlbum = await axios.get("https://leonardoapi.vercel.app/api/albums");

    return { tracklist: ListaMusical.data.tracks, albumslist: ListaAlbum.data.albums }
}
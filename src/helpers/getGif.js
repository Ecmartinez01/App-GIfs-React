export const getGif = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria) }&limit=10&api_key=0ZApjxwSCGgrPboEsHPnAkcEytaqrxZX`
    const res = await fetch(url)
    const {data} = await res.json()
    const GifImage = data.map(gifs =>{
        return {
            id: gifs.id,
            title:gifs.title,
            url:gifs.images.downsized_medium.url
        }
    })
   return GifImage
}
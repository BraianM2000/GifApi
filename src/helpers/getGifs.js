export const getGifs = async (category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=Mu1a9ZbWA6wY7SpVYgJgH3UayZx1J12O`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return(gifs)
}
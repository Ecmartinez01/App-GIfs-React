import { getGif } from "../../helpers/getGif"

describe('Pruebas con fetxh gifs', () => {
    it('debe de traer 10 elementos',async() => {
        const cantidad = await getGif("Goku")
        expect(cantidad.length).toBe(10)
    })
    
})

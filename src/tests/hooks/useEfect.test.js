import { renderHook } from '@testing-library/react-hooks';
import { useFetchGif } from '../../hooks/useFetchGifs';

describe('Pruebas con useEfect ', () => {
    it('deberia tener un array vacio', async() => {
        const {result,waitForNextUpdate} = renderHook(()=>useFetchGif("goku"))
        const {data, loading} = result.current
        await waitForNextUpdate()
        expect(data).toEqual([])
        expect(loading).toBe(true)
    
    })
    it('Deberia retornar un array lleno y el loading en fase', async() => {
        const {result,waitForNextUpdate} = renderHook(()=> useFetchGif("goku"))
                await waitForNextUpdate()        
        const {data, loading} = result.current
        expect(data.length).toBe(10)
        expect(loading).toBe(false)
    })
    
})

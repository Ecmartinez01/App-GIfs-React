import React from 'react';
import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid";
import  {useFetchGif}  from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas con GifGrid ', () => {
    const categoria = "soccer"

    it('Debe mostrar correctamente el componente', () => {
        useFetchGif.mockReturnValue({
          data:[],
          loading:true  
        })
        const wrapper = shallow(<GifGrid categoria={categoria}/>)
        expect(wrapper).toMatchSnapshot()
     })
    it('Deben de mostrar items cuando se carguen imagenes con nuestri useFet hc', () => {
        const gifs = []
        useFetchGif.mockReturnValue({
            data:gifs,
            loading:false  
          })
        const wrapper = shallow(<GifGrid categoria={categoria}/>)
        expect(wrapper.find('p').exists()).toBe(false)
    })
    
})

import { shallow } from "enzyme"

import React from 'react';
import { GifExpertApp } from "../GifExpertApp";

describe('Pruebas con gifGridExpert', () => {
    it('Dederia mostrar el copmponente correctamente', () => {
        const wrapper = shallow(<GifExpertApp/>)
        expect(wrapper).toMatchSnapshot()
    })
    it('debe mostrar una lista de coategorias', () => {
        const defaultCategory = ["juan","pepe"]
        const wrapper = shallow(<GifExpertApp defaultCategory={defaultCategory}/>)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find("GifGrid").length).toBe(defaultCategory.length)
    })
     
    
})

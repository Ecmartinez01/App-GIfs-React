import { shallow } from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';
import React from 'react';

describe('Pruebas con gif grid Items', () => {


    const url = "https://localhost/algo.jpg";
    const title = "hola mundo";
   const  wrapper = shallow(<GifGridItem url={url} title={title} />)
 
    it('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('Debe de tener un parrafo con el titulo', () => {
      const p = wrapper.find('p').text().trim()
      expect(p).toBe(title)
    })

    it('Debe de tener la imagen igual a la url y alt', () => {

      const img = wrapper.find('img')
      expect(img.prop("src")).toBe(url)
      expect(img.prop("alt")).toBe(title)
      })

    it('Bebe de contener animate__bounceInUps', () => {
        const div = wrapper.find("div")
        expect(div.prop("className")).toContain("animate__bounceInUps")
    })
      
    
})

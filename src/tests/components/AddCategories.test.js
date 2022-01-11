import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import React from 'react';

describe('pruebas en el add categoria', () => {
    const setCategory = jest.fn()
    let wrapper  = shallow(<AddCategory setCategory={setCategory}/>)
    beforeEach(()=>{
        jest.clearAllMocks()
         wrapper = shallow(<AddCategory setCategory={setCategory}/>)

    })
    it('debe de mostrar correctamente ', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('deberia Evaluar el input al cambiar', () => {
       const value = "Hola!!!!!!"
       const input =wrapper.find("input")
       input.simulate('change',{target:{ value }})
       const p = wrapper.find("p").text().trim()
        expect(p).toBe(value)
    })
    it('No debe de postear la informacion Onsubbmit', () => {
        wrapper.find("form").simulate("submit",{preventDefault(){}})
        expect(setCategory).not.toHaveBeenCalled()
    })
     it('debe de llamar el setCategorias y limpiar la caja de texto ', () => {
        // simular imput change 
        const value = "Hola mundo" 
        wrapper.find("input").simulate("change",{target:{value}})
        //simular el submit
         wrapper.find("form").simulate("submit",{preventDefault(){}})
        //set category se debe de haber llamado
        expect(setCategory).toHaveBeenCalled()
        //evaluar que sea una funcion 
        expect(setCategory).toHaveBeenCalledWith(expect.any(Function))            
         // el valor del input debe de estar ''
         expect(wrapper.find('input').prop("value")).toBe('')        
     })
     
    
})

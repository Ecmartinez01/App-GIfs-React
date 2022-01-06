import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ()=>{
    // const categorias = ["hya","wdsasd","sdawdw","asdadas"]
    const [categorias, setCategorias] = useState(['goku']);

    return (
         <>
          <h2 className='animate__animated animate__lightSpeedInLeft animate__delay-1s'>GifExpertApp</h2>
          <AddCategory setCategory={setCategorias}/>
          <hr/>

          <ol>
              {
                  categorias.map(categ =>(
                      <GifGrid key={categ} 
                      categoria={categ}
                      />
                  ))
              }     
          </ol>
          </>
    )
}
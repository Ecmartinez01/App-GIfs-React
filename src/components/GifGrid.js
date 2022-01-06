import React /*{ useEffect, useState }*/ from 'react';
import { useFetchGif } from '../hooks/useFetchGifs';
// import { getGif } from '../helpers/getGif';
import { GifGridItem } from './GifGridItem';
export const GifGrid =({categoria})=>{

      const {data,loading} = useFetchGif(categoria)

    
    return(<>
        <h3 className='animate__animated animate__flip animate__delay-0.5s '>{categoria}</h3>
        {loading && <p className='animate__animated animate__bounceOut animate__delay-1s '>Cargando</p>}
        <div className='card-grid'>
            {data.map(gif => (
               <GifGridItem 
               key={gif.id}
               {...gif}
               /> 
                
            ))}
      
        </div>
    </>
    )
}
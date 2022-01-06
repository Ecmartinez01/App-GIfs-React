import { useEffect, useState } from "react"
import { getGif } from '../helpers/getGif';
export const useFetchGif =(categoria)=>{
    const [state, setState] = useState({
        data:[],
        loading:true
    })
    useEffect(()=>{
        
        getGif(categoria).then(gifs =>{
           
                setState({
                    data:gifs,
                    loading:false
                })
                
            ;
        })
    },[categoria])
   
    return state
}
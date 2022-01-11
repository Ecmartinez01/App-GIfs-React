import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategory}) => {
    const [texto , setTexto ] = useState("")

    const encuentraTexto = (e)=>{
        setTexto(e.target.value)
    }
    const submit = (e)=>{
        e.preventDefault()
        console.log("Submit")
        if (texto.trim().length > 2) {
            setCategory(cats => [texto,...cats])
            setTexto('')
        }
    }
    return (
        <form onSubmit={submit} >
            <p> {texto}</p>
            <input
            value={texto}
            type="text"
            onChange={encuentraTexto}
            />
        </form>
        
    )
}
AddCategory.propTypes ={
    setCategory : PropTypes.func.isRequired       
}
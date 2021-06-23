
import React, { useState } from "react"
import { AddCategory } from "./componentes/AddCategory"
import { GifsGrid } from "./componentes/GifsGrid"

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['overwatch'])

    // const handleAdd = () =>{
    //     setCategories([...categories,'hunter x hunter'])
    // setCategories(catego=>[...catego,inputValue])}

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map(category =>
                       <GifsGrid key={category} category={category}/>
                    )
                }
            </ol>
        </div>
    )
}


export default GifExpertApp

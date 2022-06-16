import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Valorant']); // cuando hay cambio en este estado vuelve a generar

    const addCategory = (newCategory) => {

        if (categories.find(categoria => categoria.toLowerCase() == newCategory.toLowerCase())) return;

        setCategories([newCategory,...categories])
    }

    return (
        <>
            <h1>Gif expert App</h1>

            <AddCategory
                /* setCategories={setCategories} */
                onNewCategory={addCategory}
            />

            
            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}

import { useState,useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {    
    
    const { images, isLoading } = useFetchGifs(category);
    
    return (
    <>
        <h2>{category}</h2>
        {
          isLoading
          ? <h2  >cargando...</h2>
          : null
        }
        
        <div className="card-grid" >
          {
            images.map( (image) => (
              <GifItem 
                key={image.id} 
                { ...image }
              />
            ))
          }
        </div>
    </>
  )
}

import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('Dragon Ball')

    const onInputChange = ({target})=>{
        setInputValue(target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        onNewCategory(inputValue)
        setInputValue('');
    }

    return (

        <form onSubmit={(event) => onSubmit(event)  } >
            <input
                type="text" 
                placeholder="Buscar gif...."
                value={inputValue}
                onChange={ onInputChange}
            />
        </form>
    )
}

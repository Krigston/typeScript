import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import "./styles.css"
import Pizza from "../models/Pizza";
interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void
}

const initState = {
    title: '',
    price: '',
    img: ''
}
const AddPizzaForm: FC<AddPizzaFormProps> = ({addPizza}) => {
    const [newPizza, setNewPizza] = useState<{title: string, price: string, img: string}>(initState)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setNewPizza({
            ...newPizza, [name]: value
        })
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {title, price, img} = newPizza;
        if (title && price && img) {
            addPizza({
                title,
                price: Number(price),
                img,
                id: Date.now()
            })
            setNewPizza(initState)
        }

    }

    return (
    <form onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Название" onChange={handleChange} value={newPizza.title}/>
        <input name="price" type="text" placeholder="Стоимость" onChange={handleChange} value={newPizza.price}/>
        <input name="img" type="text" placeholder="Изображение" onChange={handleChange} value={newPizza.img}/>
        <button type="submit">+ добавить в меню</button>
    </form>
)
}
export default AddPizzaForm
import React, {FC} from "react";
import "./styles.css"

const AddPizzaForm: FC = () => {
return (
    <form>
        <input name="title" type="text" placeholder="Название" onChange={handleCange}/>
        <input name="price" type="text" placeholder="Стоимость" onChange={handleCange}/>
        <input name="img" type="text" placeholder="Изображение" onChange={handleCange}/>
        <button type="submit"></button>
    </form>
)
}
export default AddPizzaForm
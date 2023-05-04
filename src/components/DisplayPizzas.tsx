import React, {FC} from "react";
import Pizza from "../models/Pizza";
import PizzaItem from "./PizzaItem";

interface DisplayPizzasProps {
    pizzasList: Pizza[];
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void
}
const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList, updatePizza, deletePizza}) => {
    return (
        <div className={'container'}>
            {pizzasList.map((pizza) => {
               return <PizzaItem key={pizza.id} pizza={pizza} updatePizza={updatePizza} deletePizza={deletePizza}/>
            })}
        </div>
    )
}

export default DisplayPizzas
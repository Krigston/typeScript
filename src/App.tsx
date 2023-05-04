import React, {FC, useState} from 'react';
import './App.css';
import AddPizzaForm from "./components/AddPizzaForm";
import Pizza from "./models/Pizza";
import DisplayPizzas from "./components/DisplayPizzas";

const App: FC = () => {
    const [pizzaList, setPizzaList] = useState<Pizza[]>([])
    const addPizza = (newPizza: Pizza) => {
     setPizzaList([...pizzaList, newPizza]);
    }
    const updatePizza = (newPizza: Pizza) => {
     setPizzaList(pizzaList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza)));
    }

    const deletePizza = (id: number) => {
        setPizzaList(pizzaList.filter(pizza => pizza.id !== id))
    }
  return (
    <div className="App">
      <div className={"wrap"}>
        <span className={"heading"}>Пиццерия</span>
          <AddPizzaForm addPizza={addPizza}/>
          <DisplayPizzas pizzasList={pizzaList} updatePizza={updatePizza} deletePizza={deletePizza}/>
      </div>
    </div>
  );
}

export default App;

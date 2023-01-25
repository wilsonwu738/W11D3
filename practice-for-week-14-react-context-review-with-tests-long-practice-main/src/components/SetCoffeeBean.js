import { useContext } from 'react';
import { CoffeeContext } from "../context/CoffeeContext";
import coffeeBeans from '../mockData/coffeeBeans.json';

const SetCoffeeBean = () => {
  const { coffeeBean, setCoffeeBeanId } = useContext(CoffeeContext);

  const onOptionChangeHandler = (e) => {
    console.log(e.target.value)
    setCoffeeBeanId(e.target.value);
  }

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        value={coffeeBean.id}
        onChange={onOptionChangeHandler}
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;
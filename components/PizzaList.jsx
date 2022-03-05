import React from 'react';
import styles from "../styles/PizzaList.module.css";
import PizzaCard from './PizzaCard';

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>LA MEJOR PIZZA DE ZONA OESTE</h1>
        <p className={styles.desc}>
        Excelentes Pizzas y Hamburguesas con mucha variedad para elegir
        </p>
        <div className={styles.wrapper}>
          {pizzaList.map((pizza) => (
            <PizzaCard key={pizza._id} pizza={pizza} />
          ))} 
        </div>
    </div>
  )
}

export default PizzaList
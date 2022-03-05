import { useState } from "react";
import styles from "../styles/OrderDetaild.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Pagará después de la entrega.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Nombre completo</label>
          <input 
          placeholder="Nombre completo..."
          type="text"
          className={styles.input}
          onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Numero de telefono</label>
          <input 
          placeholder="1125848769..."
          type="text"
          className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Direccion</label>
          <input 
          rows={5}
          placeholder="Av siempre viva 123..."
          type="text"
          className={styles.input}
          onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Orden
        </button>
      </div>
    </div>
  )
}

export default OrderDetail
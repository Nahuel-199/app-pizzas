import React from 'react';
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/footer.jpg" objectFit='cover' layout='fill' alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH POR DIOS, LA MEJOR PIZZA DE ZONA OESTE, DEV PIZZAS.
          </h2>
        </div>
        <div className={styles.card}>
        <h1 className={styles.title}>NUESTRO LOCAL</h1>
        <p className={styles.text}>
          Av Siempre Viva 1234.
          <br /> Sprinfield, 5678
          <br /> (011) 152354-8596
        </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HORARIO DE ATENCION</h1>
          <p className={styles.text}>
            MARTES A JUEVES
            <br /> 12:00 - 23:00
          </p>
          <p className={styles.text}>
            VIERNES A DOMINGO
            <br /> 12:00 - 00:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
import React, { useState } from 'react';
import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {
    const [index, setIndex] = useState(0)

    const images = [
      "/img/slider0.png",
      "/img/slider1.png",
      "/img/slider3.png",
    ];

    const handleArrow = (direction) => {
        if(direction === "1"){
            setIndex(index !== 0 ? index - 1 : 2)
        }
        if(direction === "r"){
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }


  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left:0}} onClick={() => handleArrow("1")}>
        <Image src="/img/arrow.png" alt="" layout='fill' objectFit='contain'/>
        </div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
            <div className={styles.imgContainer} key={i}>
               <Image src={img}  alt="" layout='fill' objectFit='contain' />               
            </div>
             ))}
        </div>
        <div className={styles.arrowContainer} style={{right:0}} onClick={() => handleArrow("r")}>
        <Image src="/img/arrow2.png" alt="" layout='fill' objectFit='contain'/>
        </div>
    </div>
  )
}

export default Featured
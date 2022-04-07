import React from "react";
import Left from "./Left";
import Right from "./Right";
import styles from "./cards.module.scss";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <Left mode="Searches" />
        <Right mode="Searches" />
      </div>

      <div className={styles.cardContainer}>
        <Left mode="Clicks" />
        <Right mode="Clicks" />
      </div>

      <div className={styles.cardContainer}>
        <Left mode="Sales" />
        <Right mode="Sales"/>
      </div>
    </div>
  );
};

export default Card;

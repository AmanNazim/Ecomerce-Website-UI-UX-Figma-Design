"use client";
import React, { useState } from "react";
import styles from "./animation-button.module.css";

const AnimationButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 3000); // Reset after animation
  };

  return (
    <div className={styles.buttonContainer}>
      <button
        className={`${styles.buttonBtn} ${clicked ? styles.clicked : ""}`}
        onClick={handleClick}
      >
        {clicked ? "Subscribed" : "Subscribe"}
      </button>
      {clicked && (
        <div className={styles.stars}>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
        </div>
      )}
    </div>
  );
};

export default AnimationButton;

import React from 'react';

import styles from './Result.module.css';

const Result = ({
  setBill,
  setNumberOfPeople,
  setTipPercent,
  total,
  setTotal,
  tipAmount,
  setTipAmount,
}) => {
  const handleReset = () => {
    setBill('');
    setNumberOfPeople('');
    setTipPercent('');
    setTotal(0.0);
    setTipAmount(0.0);
  };

  return (
    <div className={styles.resultContainer}>
      <div className={styles.tipAmount}>
        <h3>
          Tip Amount <span>/ person</span>
        </h3>
        <p>${tipAmount}</p>
      </div>
      <div className={styles.total}>
        <h3>
          Total <span>/ person</span>
        </h3>
        <p>${total}</p>
      </div>
      <button type="button" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};

export default Result;

import React from 'react';

import styles from './Result.module.css';

const Result = () => {
  return (
    <div className={styles.resultContainer}>
      <div className={styles.tipAmount}>
        <h3>
          Tip Amount <span>/ person</span>
        </h3>
        <p>$4.27</p>
      </div>
      <div className={styles.total}>
        <h3>
          Total <span>/ person</span>
        </h3>
        <p>$32.79</p>
      </div>
      <button>RESET</button>
    </div>
  );
};

export default Result;

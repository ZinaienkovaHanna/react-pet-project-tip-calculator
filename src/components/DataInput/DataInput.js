import Buttons from '../Buttons/Buttons';

import styles from './DataInput.module.css';

const DataInput = () => {
  return (
    <div className={styles.dataInputContainer}>
      <div className={styles.bill}>
        <label htmlFor="billInput" className={styles.bill}>
          Bill
        </label>
        <img
          src="/images/icon-dollar.svg"
          alt="logo"
          className={styles.leftPlaceholder}
        />
        <input type="number" id="billInput" placeholder="0" />
      </div>

      <div className={styles.buttonsContainer}>
        <h2>Select Tip %</h2>
        <Buttons />
      </div>

      <div className={styles.people}>
        <label htmlFor="peopleInput">Number of People</label>
        <img
          src="/images/icon-person.svg"
          alt="logo"
          className={styles.leftPlaceholder}
        />
        <input type="number" id="peopleInput" placeholder="0" />
      </div>
    </div>
  );
};

export default DataInput;

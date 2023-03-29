import { FaUser } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';
import Buttons from '../Buttons/Buttons';
import Result from '../Result/Result';

import styles from './DataInput.module.css';

const DataInput = () => {
  return (
    <div className={styles.dataInputContainer}>
      <div className={styles.bill}>
        <label htmlFor="billInput">Bill</label>
        <BsCurrencyDollar className={styles.leftPlaceholder} />
        <input type="number" id="billInput" placeholder="0" />
      </div>

      <div className={styles.buttonsContainer}>
        <h2>Select Tip %</h2>
        <Buttons />
      </div>

      <div className={styles.people}>
        <label htmlFor="peopleInput">Number of People</label>
        <FaUser className={styles.leftPlaceholder} />
        <input type="number" id="peopleInput" placeholder="0" />
      </div>

      <Result />
    </div>
  );
};

export default DataInput;

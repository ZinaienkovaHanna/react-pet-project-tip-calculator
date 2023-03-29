import Buttons from '../Buttons/Buttons';

import styles from './Form.module.css';

const Form = ({
  bill,
  setBill,
  numberOfPeople,
  setNumberOfPeople,
  tipPercent,
  setTipPercent,
}) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'bill') {
      setBill(value);
    } else if (name === 'numberOfPeople') {
      setNumberOfPeople(value);
    }
  };

  return (
    <form>
      <div className={styles.bill}>
        <label htmlFor="bill">Bill</label>
        <img
          src="/images/icon-dollar.svg"
          alt="logo"
          className={styles.leftPlaceholder}
        />
        <input
          type="number"
          name="bill"
          id="bill"
          placeholder="0"
          value={bill}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.buttonsContainer}>
        {/* <h2>Select Tip %</h2> */}
        <h2>{tipPercent}</h2>

        <Buttons tipPercent={tipPercent} setTipPercent={setTipPercent} />
      </div>

      <div className={styles.numberOfPeople}>
        <label htmlFor="numberOfPeople">Number of People</label>
        <img
          src="/images/icon-person.svg"
          alt="logo"
          className={styles.leftPlaceholder}
        />
        <input
          type="number"
          name="numberOfPeople"
          id="numberOfPeople"
          placeholder="0"
          value={numberOfPeople}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};

export default Form;

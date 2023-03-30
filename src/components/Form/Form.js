import Buttons from '../Buttons/Buttons';

import styles from './Form.module.css';

const Form = ({
  bill,
  setBill,
  numberOfPeople,
  setNumberOfPeople,
  tipPercent,
  setTipPercent,
  tipPercentCustom,
  setTipPercentCustom,
  showErrorMessage,
  setShowErrorMessage,
  activeButton,
  setActiveButton,
}) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'bill' && /^((\d+|0)?(\.\d{1,2})?|)$/.test(value)) {
      setBill(value);
    }

    if (name === 'numberOfPeople' && /^(0|[1-9]\d*|)$/.test(value)) {
      setNumberOfPeople(value);

      if (value === '0') {
        setShowErrorMessage(true);
        event.target.focus();
        event.target.style.borderColor = 'red';
      } else {
        setShowErrorMessage(false);
        event.target.style.borderColor = '';
      }
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
          step="0.01"
          min={1}
          value={bill}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.buttonsContainer}>
        <h2>Select Tip %</h2>
        <Buttons
          tipPercent={tipPercent}
          setTipPercent={setTipPercent}
          tipPercentCustom={tipPercentCustom}
          setTipPercentCustom={setTipPercentCustom}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </div>

      <div className={styles.numberOfPeople}>
        <div>
          <label htmlFor="numberOfPeople">Number of People</label>
          {showErrorMessage && <p>Can’t be zero</p>}
        </div>
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
          step="1"
          value={numberOfPeople}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};

export default Form;

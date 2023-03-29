import Buttons from '../Buttons/Buttons';

import styles from './Form.module.css';

const Form = ({
  bill,
  setBill,
  numberOfPeople,
  setNumberOfPeople,
  tipPercent,
  setTipPercent,
  showErrorMessage,
  setShowErrorMessage,
  activeButton,
  setActiveButton,
}) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'bill') {
      setBill(value);
    }

    if (name === 'numberOfPeople') {
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
          value={bill}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === '-' && e.preventDefault()}
        />
      </div>

      <div className={styles.buttonsContainer}>
        <h2>Select Tip %</h2>
        <Buttons
          tipPercent={tipPercent}
          setTipPercent={setTipPercent}
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
          onKeyDown={(e) =>
            (e.key === '.' || e.key === '-' || e.key === ',') &&
            e.preventDefault()
          }
        />
      </div>
    </form>
  );
};

export default Form;

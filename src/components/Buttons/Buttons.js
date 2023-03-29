import dataButtons from '../../data/dataButtons';

import styles from './Buttons.module.css';

const Buttons = ({ tipPercent, setTipPercent }) => {
  const handleTipButtonClick = (percent) => {
    setTipPercent(percent);
  };

  const handleCustomTipChange = (event) => {
    setTipPercent(event.target.value);
  };

  console.log(tipPercent);

  return (
    <div className={styles.buttons}>
      {dataButtons.map((button) => (
        <button
          key={button.id}
          onClick={() => handleTipButtonClick(button.percent)}
        >
          {button.percent}%
        </button>
      ))}
      <input
        type="number"
        id="customTip"
        placeholder="Custom"
        value={tipPercent}
        onChange={handleCustomTipChange}
      />
    </div>
  );
};

export default Buttons;

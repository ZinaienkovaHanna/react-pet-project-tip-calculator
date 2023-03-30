import dataButtons from '../../data/dataButtons';

import styles from './Buttons.module.css';

const Buttons = ({
  setTipPercent,
  tipPercentCustom,
  setTipPercentCustom,
  activeButton,
  setActiveButton,
}) => {
  const handleTipButtonClick = (percent, id) => {
    setTipPercentCustom('');
    setTipPercent(percent);
    setActiveButton(id);
  };

  const handleCustomTipChange = (event) => {
    const { value } = event.target;
    setTipPercent(0);
    if (/^(0|[1-9]\d*|)$/.test(value)) setTipPercentCustom(value);
    setActiveButton(null);
  };

  const getButtonStyle = (id) => {
    if (id === activeButton) {
      return { backgroundColor: 'var(--strong-cyan)' };
    }
  };

  return (
    <div className={styles.buttons}>
      {dataButtons.map((button) => (
        <button
          type="button"
          key={button.id}
          style={getButtonStyle(button.id)}
          onClick={() => handleTipButtonClick(button.percent, button.id)}
        >
          {button.percent}%
        </button>
      ))}
      <input
        type="number"
        id="customTip"
        placeholder="Custom"
        value={tipPercentCustom}
        onChange={handleCustomTipChange}
      />
    </div>
  );
};

export default Buttons;

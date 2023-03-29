import dataButtons from '../../data/dataButtons';

import styles from './Buttons.module.css';

const Buttons = ({
  tipPercent,
  setTipPercent,
  activeButton,
  setActiveButton,
}) => {
  const handleTipButtonClick = (percent, id) => {
    setTipPercent(percent);
    setActiveButton(id);
  };

  const handleCustomTipChange = (event) => {
    setTipPercent(event.target.value);
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
        value={tipPercent}
        onChange={handleCustomTipChange}
        onKeyDown={(e) => e.key === '-' && e.preventDefault()}
      />
    </div>
  );
};

export default Buttons;

import dataButtons from '../../data/dataButtons';

import styles from './Buttons.module.css';

const Buttons = () => {
  return (
    <div className={styles.buttons}>
      {dataButtons.map((button) => (
        <button key={button.id}>{button.title}</button>
      ))}
      <input type="number" id="customInput" placeholder="Custom" />
    </div>
  );
};

export default Buttons;

import DataInput from '../DataInput/DataInput';

import styles from './TipCalculator.module.css';
const TipCalculator = () => {
  return (
    <section className={styles.bgContainer}>
      <img src="/images/logo.svg" alt="logo" className={styles.logo} />
      <DataInput />
    </section>
  );
};

export default TipCalculator;

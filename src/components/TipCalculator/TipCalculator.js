import DataInput from '../DataInput/DataInput';
import Result from '../Result/Result';

import styles from './TipCalculator.module.css';
const TipCalculator = () => {
  return (
    <section className={styles.bgContainer}>
      <img src="/images/logo.svg" alt="logo" className={styles.logo} />
      <div className={styles.contentContainer}>
        <DataInput />
        <Result />
      </div>
    </section>
  );
};

export default TipCalculator;

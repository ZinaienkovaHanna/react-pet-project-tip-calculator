import { useState } from 'react';
import Form from '../Form/Form';
import Result from '../Result/Result';

import styles from './TipCalculator.module.css';
const TipCalculator = () => {
  const [bill, setBill] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [tipAmount, setTipAmount] = useState(0.0);
  const [total, setTotal] = useState(0.0);

  return (
    <section className={styles.bgContainer}>
      <img src="/images/logo.svg" alt="logo" className={styles.logo} />
      <div className={styles.contentContainer}>
        <Form
          tipPercent={tipPercent}
          setTipPercent={setTipPercent}
          bill={bill}
          setBill={setBill}
          numberOfPeople={numberOfPeople}
          setNumberOfPeople={setNumberOfPeople}
        />
        <Result
          tipAmount={tipAmount}
          setTipAmount={setTipAmount}
          total={total}
          setTotal={setTotal}
          setBill={setBill}
          setNumberOfPeople={setNumberOfPeople}
        />
      </div>
    </section>
  );
};

export default TipCalculator;

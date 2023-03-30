import { useState, useEffect } from 'react';
import Form from '../Form/Form';
import Result from '../Result/Result';

import styles from './TipCalculator.module.css';

const TipCalculator = () => {
  const [bill, setBill] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [tipPercent, setTipPercent] = useState(0);
  const [tipPercentCustom, setTipPercentCustom] = useState('');
  const [tipAmount, setTipAmount] = useState('0.00');
  const [total, setTotal] = useState('0.00');
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    if (
      bill > 0 &&
      numberOfPeople > 0 &&
      (tipPercent > 0 || tipPercentCustom >= 0)
    ) {
      const tipAmountCalculate =
        (Number(bill) * (tipPercent || tipPercentCustom)) / 100;
      const totalCalculate = tipAmountCalculate + Number(bill);
      setTipAmount((tipAmountCalculate / numberOfPeople).toFixed(2));
      setTotal((totalCalculate / numberOfPeople).toFixed(2));
    }
  }, [bill, numberOfPeople, tipPercent, tipPercentCustom]);

  const handleReset = () => {
    setBill('');
    setNumberOfPeople('');
    setTipPercent(0);
    setTipPercentCustom('');
    setTotal('0.00');
    setTipAmount('0.00');
    setShowErrorMessage(false);
    setActiveButton(null);
  };

  return (
    <section className={styles.bgContainer}>
      <img src="/images/logo.svg" alt="logo" className={styles.logo} />
      <div className={styles.contentContainer}>
        <Form
          tipPercent={tipPercent}
          setTipPercent={setTipPercent}
          tipPercentCustom={tipPercentCustom}
          setTipPercentCustom={setTipPercentCustom}
          bill={bill}
          setBill={setBill}
          numberOfPeople={numberOfPeople}
          setNumberOfPeople={setNumberOfPeople}
          showErrorMessage={showErrorMessage}
          setShowErrorMessage={setShowErrorMessage}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <Result tipAmount={tipAmount} total={total} handleReset={handleReset} />
      </div>
    </section>
  );
};

export default TipCalculator;

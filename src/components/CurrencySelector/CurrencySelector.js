import { useState } from 'react';
import styles from './CurrencySelector.module.scss';

const CurrencySelector = ({onChoose, currencies}) => {
    return (
        <section className={styles.CurrencySelection}>
          {Object.values(currencies).map(item => (
            <button key={item.symbol} onClick={() => onChoose(item)}>{item.label}</button>
          ))}
        </section>
    );
}

export default CurrencySelector;
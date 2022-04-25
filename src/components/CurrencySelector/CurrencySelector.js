import { useCurrency } from '../../context/currency';
import styles from './CurrencySelector.module.scss';

const CurrencySelector = ({currencies}) => {

    const [currency, setCurrency] = useCurrency();

    return (
        <section className={styles.CurrencySelection}>
          {Object.values(currencies).map(item => (
            <button key={item.code} onClick={() => setCurrency(item)}>{item.label}</button>
          ))}
        </section>
    );
}

export default CurrencySelector;
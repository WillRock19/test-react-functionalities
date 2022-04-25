import { useCurrency } from '../../context/currency';
import styles from './CurrencySelector.module.scss';

const CurrencySelector = ({currencies}) => {

    const {onChange} = useCurrency();

    return (
        <section className={styles.CurrencySelection}>
          {Object.values(currencies).map(item => (
            <button key={item.code} onClick={() => onChange(item)}>{item.label}</button>
          ))}
        </section>
    );
}

export default CurrencySelector;
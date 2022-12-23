import { useCurrency } from '../../context/currency';

import styles from './CurrencySelector.module.scss';
import Select from 'react-select';

const createSelectOption = (itens) => {
  return itens.map(item => {
    return { 
      value: item.code, 
      label: item.label 
    }
  });
}

const CurrencySelector = ({currencies}) => {
    const {onChange} = useCurrency();

    return (
        <section className={styles.CurrencySelection}>
          {/* <Select options={Object.values(currencies)} onChange={(item) => onChange(item)} /> */}
          {Object.values(currencies).map(item => (
            <button key={item.code} onClick={() => onChange(item)}>{item.label}</button>
          ))}
        </section>
    );
}

export default CurrencySelector;
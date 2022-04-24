import {getBooksData} from './services/book-api';

import Books from './components/Books';
import styles from './App.module.scss';
import CurrencyContext from './context/currency';

import { useState } from 'react';

function App() {
  const [currency, setCurrency] = useState('R$');

  const handleChangeCurrency = (currency) => {
    setCurrency(currency);
  }

  return (
    <CurrencyContext.Provider value={currency}>
      <section className={styles.App}>
        <h1>My Books</h1>
        <section className={styles.CurrencySelection}>
          <button onClick={() => handleChangeCurrency('€')}>EUR</button>
          <button onClick={() => handleChangeCurrency('$')}>DÓLAR</button>
          <button onClick={() => handleChangeCurrency('R$')}>REAIS</button>
        </section>
        <Books list={getBooksData()} />
      </section>
    </CurrencyContext.Provider>
  );
}

export default App;

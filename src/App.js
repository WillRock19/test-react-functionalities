import { useState } from "react";
import { getBooksData } from "./services/book-api";
import { getCurrencies } from "./services/currencies-api";

import Books from "./components/Books";
import styles from "./App.module.scss";
import CurrencyContext from "./context/currency";

function App() {
  const [currency, setCurrency] = useState("R$");

  const handleChangeCurrency = (currency) => {
    setCurrency(currency);
  };
  
  return (
    <CurrencyContext.Provider value={currency}>
      <section className={styles.App}>
        <h1>My Books</h1>
        <section className={styles.CurrencySelection}>
          {Object.values(getCurrencies()).map(item => (
            <button onClick={() => handleChangeCurrency(item.symbol)}>{item.label}</button>
          ))}
        </section>
        <Books list={getBooksData()} />
      </section>
    </CurrencyContext.Provider>
  );
}

export default App;

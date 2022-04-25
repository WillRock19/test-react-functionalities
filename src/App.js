import { useState } from "react";
import { getBooksData } from "./services/book-api";
import { getCurrencies } from "./services/currencies-api";

import Books from "./components/Books";
import styles from "./App.module.scss";
import CurrencyContext from "./context/currency";
import CurrencySelector from "./components/CurrencySelector";

function App() {
  const [currency, setCurrency] = useState(getCurrencies().Real);

  const handleChangeCurrency = (currency) => {
    setCurrency(currency);
  };

  return (
    <CurrencyContext.Provider value={currency}>
      <section className={styles.App}>
        <h1>My Books</h1>
        <CurrencySelector currencies={getCurrencies()} onChoose={handleChangeCurrency} />
        <Books list={getBooksData()} />
      </section>
    </CurrencyContext.Provider>
  );
}

export default App;

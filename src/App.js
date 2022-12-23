import { getBooksData } from "./services/book-api";
import { getCurrencies } from "./services/currencies-api";
import { CurrencyProvider } from "./context/currency";

import Books from "./components/Books";
import styles from "./App.module.scss";
import CurrencySelector from "./components/CurrencySelector";

function App() {
  return (
    <CurrencyProvider>
      <section className={styles.App}>
        <h1>My Books</h1>
        <CurrencySelector currencies={getCurrencies()} />
        <Books list={getBooksData()} />
      </section>
    </CurrencyProvider>
  );
}

export default App;

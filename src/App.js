import {getBooksData} from './services/book-api';

import Books from './components/Books';
import styles from './App.module.scss';
import CurrencyContext from './context/currency';

function App() {
  return (
    <CurrencyContext.Provider value="R$">
      <section className={styles.App}>
        <h1>My Books</h1>
        <Books list={getBooksData()} />
      </section>
    </CurrencyContext.Provider>
  );
}

export default App;

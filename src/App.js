import {getBooksData} from './services/book-api';

import Books from './components/Books';
import styles from './App.module.scss';

function App() {
  return (
    <section className={styles.App}>
      <h1>My Books</h1>
      <Books list={getBooksData()} />
    </section>
  );
}

export default App;

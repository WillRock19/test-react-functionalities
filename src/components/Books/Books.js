import styles from './Books.module.scss';
import Book from '../Book/Book';

const Books = ({list}) => {
    return (
        <ul className={styles.bookList}>
            {list.map(item => (
                <Book key={item.id} item={item} />
            ))}
        </ul>
    );
}

export default Books;
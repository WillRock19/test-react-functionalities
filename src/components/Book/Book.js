import styles from './Book.module.scss';

const Book = ({ item }) => {
    return (
        <li className={styles.bookItem}>
            <span>{item.title}</span>
            <span className={styles.price}>
                R$ {item.price}
            </span>
        </li>
    );
}

export default Book;

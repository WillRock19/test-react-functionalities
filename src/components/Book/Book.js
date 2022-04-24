import styles from './Book.module.scss';
import CurrencyContext from '../../context/currency';
import { useContext } from 'react';

const Book = ({ item }) => {

    const currency = useContext(CurrencyContext);

    return (
        <li className={styles.bookItem}>
            <span>{item.title}</span>
            <span className={styles.price}>
                {currency} {item.price}
            </span>
        </li>
    );
}

export default Book;

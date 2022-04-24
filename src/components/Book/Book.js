import styles from './Book.module.scss';
import CurrencyContext from '../../context/currency';

const Book = ({ item }) => {
    return (
        <CurrencyContext.Consumer>
            {(currency) => (
                <li className={styles.bookItem}>
                    <span>{item.title}</span>
                    <span className={styles.price}>
                        {currency} {item.price}
                    </span>
                </li>
            )}
        </CurrencyContext.Consumer>
    );
}

export default Book;

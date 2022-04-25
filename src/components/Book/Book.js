import styles from './Book.module.scss';
import CurrencyContext from '../../context/currency';
import { useContext } from 'react';

const formattedPrice = (currencyCode, price) => {
    return new Intl.NumberFormat(undefined, {style: 'currency', currency: currencyCode}).format(price);
}

const Book = ({ item }) => {
    const currency = useContext(CurrencyContext);

    return (
        <li className={styles.bookItem}>
            <span>{item.title}</span>
            <span className={styles.price}>
                {formattedPrice(currency.code, (item.price * currency.conversionRate))}
            </span>
        </li>
    );
}

export default Book;

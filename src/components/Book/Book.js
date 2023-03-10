import { useCurrency } from "../../context/currency";
import styles from "./Book.module.scss";

const formattedPrice = (currencyCode, price) => {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currencyCode,
  }).format(price);
};

const Book = ({ item }) => {
  const { value: currency } = useCurrency();

  return (
    <li className={styles.bookItem}>
      <span>{item.title}</span>
      <span className={styles.price}>
        {formattedPrice(currency.code, item.price * currency.conversionRate)}
      </span>
    </li>
  );
};

export default Book;

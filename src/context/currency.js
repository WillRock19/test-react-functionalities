import React, {useState} from 'react';
import { getCurrencies } from '../services/currencies-api';

const currencies = getCurrencies();
const CurrencyContext = React.createContext({code: '', conversionRate: 0, label: ''});

const useCurrency = () => {
    const [currency, setCurrency] = React.useContext(CurrencyContext);
    const handleChangeCurrency = (currency) => {
        setCurrency(currency);
    };

    return { value: currency, onChange: handleChangeCurrency };
};

const CurrencyProvider = ({children}) => {
    const [currency, setCurrency] = useState(currencies.Real);

    return (
        <CurrencyContext.Provider value={[currency, setCurrency]}>
            {children}
        </CurrencyContext.Provider>
    );
}

export {CurrencyProvider, useCurrency};
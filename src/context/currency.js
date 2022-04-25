import React, {useState} from 'react';
import { getCurrencies } from '../services/currencies-api';

const currencies = getCurrencies();
const CurrencyContext = React.createContext({code: '', conversionRate: 0, label: ''});
const useCurrency = () => React.useContext(CurrencyContext);

const CurrencyProvider = ({value, children}) => {
    const [currency, setCurrency] = useState(currencies.Real);

    const handleChangeCurrency = (currency) => {
        console.log("Let's change it?");
        setCurrency(currency);
    };

    return (
        <CurrencyContext.Provider value={[currency, handleChangeCurrency]}>
            {children}
        </CurrencyContext.Provider>
    );
}


export {CurrencyProvider, useCurrency};

export default CurrencyContext;
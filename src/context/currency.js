import React from 'react';

const CurrencyContext = React.createContext({code: '', conversionRate: 0, label: ''});

export default CurrencyContext;
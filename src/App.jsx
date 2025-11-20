import { useState, useEffect, useMemo } from 'react';
import useCurrencyInfo from './useCurrencyInfo';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [baseCurrency, setBaseCurrency] = useState("usd");
  const [targetCurrency, setTargetCurrency] = useState("pkr");

  const currencyData = useCurrencyInfo(baseCurrency);

  const allCurrencies = useMemo(() => {
    if (!currencyData) return [];
    return Object.keys(currencyData).sort();
  }, [currencyData]);

  return (
    <div className='flex justify-center'>
      <div className='w-[700px] p-5 bg-gray-500'>
        <h1 className='text-white text-[30px]'>Currency Converter</h1>

        <div>
          <p className='text-white text-[20px]'>Enter Amount</p>
          <input
            className='bg-white text-black pl-2'
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div>
          <p>Convert From</p>
          <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
            {allCurrencies.map((curr) => (
              <option key={curr} value={curr}>{curr.toUpperCase()}</option>
            ))}
          </select>
        </div>

        <div>
          <p>Convert To</p>
          <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
            {allCurrencies.map((curr) => (
              <option key={curr} value={curr}>{curr.toUpperCase()}</option>
            ))}
          </select>
        </div>

        <p className='text-white text-[20px]'>
          Converted Amount: {currencyData && currencyData[targetCurrency] ? (amount * currencyData[targetCurrency]).toFixed(2) : '-'}
        </p>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        const response = await fetch(url);
        const result = await response.json();
        setData(result[currency]);
      } catch (error) {
        console.error("Error Fetching API:", error);
      }
    };

    fetchCurrency();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

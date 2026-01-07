export const currencyConverter = {
    convert(amount, fromCurrency, toCurrency, currencyData) {
        const fromRate = currencyData[fromCurrency]?.rate;
        const toRate = currencyData[toCurrency]?.rate;

        if (!fromRate || !toRate) return null;

        const usdAmount = amount / fromRate;
        const result = usdAmount * toRate;

        return {
            amount: parseFloat(result.toFixed(2)),
            symbol: currencyData[toCurrency].symbol,
            formatted: `${currencyData[toCurrency].symbol}${result.toFixed(2)}`
        };
    },

    getExchangeRate(fromCurrency, toCurrency, currencyData) {
        const fromRate = currencyData[fromCurrency]?.rate;
        const toRate = currencyData[toCurrency]?.rate;

        if (!fromRate || !toRate) return null;

        return parseFloat((toRate / fromRate).toFixed(6));
    }
};


export default function CurrencyExchange () {
    return fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
      .then((response) => response.json())
  };
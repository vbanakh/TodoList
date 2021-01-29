import React, { useEffect, useState } from "react";
import getCurrencyRate from "../../shared/services/currencyExchange";

export default function Header() {
  const [currencyRate, setCurrencyRate] = useState([]);

  useEffect(() => {
    getCurrencyRate().then(setCurrencyRate);
  }, []);

  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <ul style={styleList}>
        {currencyRate
          .filter((currency) => currency.ccy === "USD" || currency.ccy === "EUR")
          .map((currency) => (
            <li style={liStyle} key={currency.ccy}>
              {currency.ccy} {currency.buy} : {currency.sale}
            </li>
          ))}
      </ul>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const styleList = {
  margin: "10px",
  padding: "10px",
};

const liStyle = {
  listStyle: "none",
};

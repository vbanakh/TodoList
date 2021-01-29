import React, { useEffect, useState } from "react";
import style from './header.scss';
import  getCurrencyRate from '../shared/services/currencyExchange';

export default function Header() {
  const [currencyRate, setCurrencyRate] = useState([]);

  useEffect(() => {
    getCurrencyRate().then(setCurrencyRate);
  }, []);

  return (
    <header className={style.header}>
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



const styleList = {
  margin: "10px",
  padding: "10px",
};

const liStyle = {
  listStyle: "none",
};

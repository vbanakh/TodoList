import React, { useState, useEffect } from "react";
import getCurrencyRate from "../../shared/services/currencyExchange";
import style from "../currencyRate/currencyRate.module.scss";

export default function CurrencyRate() {
  const [currencyRate, setCurrencyRate] = useState([]);

  useEffect(() => {
    getCurrencyRate().then(setCurrencyRate);
  }, []);
  return (
    <div>
      <ul className={style.styleList}>
        {currencyRate.map((currency) => (
          <li className={style.liStyle} key={currency.ccy}>
            {currency.ccy} {currency.buy} : {currency.sale}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import CurrencyExchange from "../../shared/services/currencyExchange";


export default function Header() {
  const [data, setData] = useState([]);

  useEffect(() => {
    CurrencyExchange()
      .then((json) => setData(json))
  }, [])
 
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <ul style={styleList}>
        {data.filter(item => item.ccy === "USD" || item.ccy === "EUR").map((item) => (
          <li style={liStyle} key={item.ccy}>
            {item.ccy} {item.buy} : {item.sale} 
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
}

const liStyle = {
    listStyle: "none",
}
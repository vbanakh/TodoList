import React, { useEffect, useState } from "react";
import style from './header.scss'

export default function Header() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
const num = 5.5698768;
console.log(num.toFixed(2));

  return (
    <header className={style.header}>
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



const styleList = {
    display: "flex",
    margin: "10px",
    padding: "10px",
}

const liStyle = {
    listStyle: "none",
}
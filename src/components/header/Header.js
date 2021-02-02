import React from "react";
import { Link } from "react-router-dom";
import style from "./../header/header.module.scss";

export default function Header() {
  return (
    <header className={style.header}>
      <h1> <Link to="/"  className={style.header}>To-do</Link>  |  <Link to="/currency"  className={style.header}>Currency rate</Link></h1>
    </header>
  );
}

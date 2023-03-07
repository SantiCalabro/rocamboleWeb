import React from "react";
import M from "../Styles/Menu.module.css";
import { Link } from "react-router-dom";
import { categories } from "../DataBase/Database";

export default function Menu() {
  return (
    <div>
      <div className={M.menuContainer}>
        <ul className={M.menu}>
          {categories.map((el, i) => (
            <Link style={{ textDecoration: "none" }} key={i} to={el.path}>
              <li>{el.type}</li>
            </Link>
          ))}

          <Link to="/distribucion" style={{ textDecoration: "none" }}>
            <li
              style={{ fontWeight: 700, cursor: "pointer", color: "#d62828" }}
            >
              Distribución
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

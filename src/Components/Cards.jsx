import React from "react";
import Card from "./Card";
import C from "../Styles/Cards.module.css";
import { database } from "../DataBase/Database";

export default function Cards({ section }) {
  let filtered = null;
  function filterCards() {
    filtered = database.filter(
      el => el.category.toLowerCase() === section.toLowerCase()
    );
  }

  React.useEffect(() => {
    filterCards();
    return () => {
      filtered = database;
    };
  }, []);

  filterCards();
  return (
    <div className={C.section}>
      <h1 className={C.title}>
        {section === "metalicos"
          ? "metálicos"
          : section === "serigrafias"
          ? "serigrafías"
          : section}
      </h1>

      <div className={C.container}>
        {filtered.map(el => (
          <div key={el.id}>
            <Card
              name={el.name}
              img={el.img}
              category={el.category}
              price={el.price}
              available={el.available}
              id={el.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

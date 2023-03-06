import React from "react";
import H from "../Styles/Home.module.css";
import { Link } from "react-router-dom";
import { categories } from "../DataBase/Database";

export default function Home() {
  return (
    <div>
      <div className={H.mainImageContainer}>
        <img
          src="https://res.cloudinary.com/dcbswyqrd/image/upload/v1678080927/Rocambole-mainimage.bc38df9ab0e6cec5352d_fiybgh.jpg"
          alt="Rocambole"
          className={H.mainImage}
          id="main-image"
        />
      </div>
      <div className={H.quoteContainer}>
        <p className={H.quote}>
          "El final no es muy alegre porque hay un tipo metido en su realidad
          virtual mientras alrededor hay una tragedia"
        </p>

        <p className={H.signature}>Rocambole</p>
      </div>
      <div className={H.categorySection}>
        <h1>Catálogo de artículos</h1>
        <div className={H.categoriesContainer}>
          {categories.map((el, i) => (
            <Link key={i} to={el.path} style={{ textDecoration: "none" }}>
              <div className={H.container}>
                <div className={H.imgCont} key={i}>
                  <img src={el.img} alt="" />
                </div>
                <div className={H.typeCont}>
                  <h2>{el.type}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

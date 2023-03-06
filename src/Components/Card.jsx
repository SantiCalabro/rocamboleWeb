import React from "react";
import C from "../Styles/Card.module.css";
import { Link } from "react-router-dom";
export default function Card(props) {
  return (
    <div>
      {" "}
      <Link to={`/products/${props.id}`} style={{ textDecoration: "none" }}>
        <div className={C.container}>
          {props.available === false && (
            <h5 className={C.noStock}>Sin stock</h5>
          )}
          <div className={C.imgContainer}>
            <img src={props.img} alt="profile-image" />
          </div>
          <div className={C.info}>
            <h4 className={C.textProduct}>{props.name}</h4>
            <p className={C.textMuted}>{props.price}</p>
          </div>
        </div>{" "}
      </Link>
    </div>
  );
}

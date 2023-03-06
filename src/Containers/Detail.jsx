import React from "react";
import { useParams } from "react-router-dom";
import { database } from "../DataBase/Database";
import { useState } from "react";
import D from "../Styles/Detail.module.css";
import ReactWhatsapp from "react-whatsapp";
import { useNavigate } from "react-router-dom";
export default function Detail() {
  const params = useParams();
  const navigate = useNavigate();

  let product = null;
  function findProduct() {
    product = database.find(el => Number(el.id) === Number(params.id));
  }

  const handleImage = el => {
    setImage(el);
  };

  React.useEffect(() => {
    findProduct();
    return () => {
      product = database;
    };
  }, []);
  findProduct();
  const [image, setImage] = useState(product.allPics[0]);
  return (
    <div>
      {product && (
        <>
          <div className={D.detailContainer}>
            <div className={D.imgContainer}>
              <img src={image} alt="" />
            </div>
            <div className={D.detail}>
              <div className={D.back}>
                <svg
                  onClick={() => navigate(-1)}
                  className={D.backBtn}
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
                    fill-rule="nonzero"
                  />
                </svg>
                <label>Volver</label>
              </div>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              {product.measure && <p>Formato: {product.measure}</p>}
              <h5>{product.price} + envío</h5>
              <ReactWhatsapp
                number="+54 2213085752"
                message={`Hola! Estoy interesado/a por ${product.name}. Desearía saber cómo puedo adquirirlo.`}
                style={{ border: "none", background: "none" }}
              >
                <span>Contactanos</span>
              </ReactWhatsapp>
            </div>
          </div>
          <div className={D.allPicsContainer}>
            <div className={D.allPics}>
              {product.allPics.map((el, i) => (
                <div key={i} className={D.picContainer}>
                  <img
                    className={el === image ? D.picked : D.pic}
                    src={el}
                    alt=""
                    onClick={() => handleImage(el)}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

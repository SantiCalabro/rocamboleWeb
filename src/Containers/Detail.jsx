import React from "react";
import { useParams } from "react-router-dom";
import { database } from "../DataBase/Database";
import { useState } from "react";
import D from "../Styles/Detail.module.css";
import ReactWhatsapp from "react-whatsapp";
export default function Detail() {
  const params = useParams();

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
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              {product.measure && <p>Formato: {product.measure}</p>}
              <h5>{product.price} + envío</h5>
              <ReactWhatsapp
                number="+54 2213085752"
                message={`Hola! Estoy interesado/a por ${product.name}. Desearía saber cómo puedo adquirirlo.`}
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

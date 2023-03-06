import React from "react";
import D from "../Styles/Distribution.module.css";
import ReactWhatsapp from "react-whatsapp";

export default function Distribution() {
  return (
    <div>
      <div className={D.container}>
        <div className={D.imgContainer}>
          <img
            src="https://res.cloudinary.com/dcbswyqrd/image/upload/v1678078952/IMG_20220613_152808226_HDR_goq3oi.jpg"
            alt=""
          />
        </div>
        <div className={D.infoContainer}>
          <div className={D.shipping}>
            <h1>Cómo envíamos</h1>
            <p>
              Nuestras entregas se realizan a través de Correo Argentino a
              domicilio. El costo varía según el destino a dónde se haga el
              envío.
            </p>
            <p>
              ¡Despachamos tu pedido dentro de las 72hs
              <strong> hábiles </strong>luego de haber confirmado tu compra.
            </p>
            <p>
              <strong>Retiros en persona:</strong> Estamos ubicados en San
              Clemente del Tuyú. Si estás por la zona, ¡no dudes en
              consultarnos!
            </p>
          </div>

          <div className={D.payment}>
            <h1>Métodos de pago</h1>
            <ul>
              <li>Transferencia bancaria</li>
              <li>Crédito con MercadoPago - Con un 10% de recargo adicional</li>
              <li>Efectivo - Para retiros presenciales</li>
            </ul>
          </div>
          <div className={D.contact}>
            <ReactWhatsapp
              style={{ border: "none", background: "none" }}
              number="+54 2213085752"
              message={`Hola! Quisiera obtener más información.`}
            >
              <span className={D.contactBtn}>Contactanos</span>
            </ReactWhatsapp>
          </div>
        </div>
      </div>
    </div>
  );
}

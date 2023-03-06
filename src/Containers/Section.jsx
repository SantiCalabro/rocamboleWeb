import React from "react";
import { useParams } from "react-router-dom";
import Cards from "../Components/Cards";

export default function Section() {
  const params = useParams();

  return (
    <div>
      <Cards section={params.section} />
    </div>
  );
}

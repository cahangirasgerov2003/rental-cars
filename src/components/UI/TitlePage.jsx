import React from "react";
import "../../styles/titlePage.css";

const TitlePage = (props) => {
  return (
    <div className="container">
      <h1 className="text-center text-white mb-0">{props.title}</h1>
    </div>
  );
};

export default TitlePage;

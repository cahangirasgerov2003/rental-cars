import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routers/Routers";

const MainLayout = () => {
  return (
    <Fragment>
      <Header />
      <Routers />
      <Footer />
    </Fragment>
  );
};

export default MainLayout;

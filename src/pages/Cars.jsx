import React from "react";
import Helmet from "../components/Helmet/Helmet";
import TitlePage from "../components/UI/TitlePage";
// import { DataGrid } from "@mui/x-data-grid";
// import { useDemoData } from "@mui/x-data-grid-generator";

// const VISIBLE_FIELDS = ["name", "rating"];

const Cars = () => {
  // const { data } = useDemoData({
  //   dataSet: "Employee",
  //   visibleFields: VISIBLE_FIELDS,
  //   rowLength: 100,
  // });

  return (
    <React.Fragment>
      <Helmet title="Cars">
        <section className="about__section cars__section mb-5">
          <TitlePage title="All Cars"></TitlePage>
        </section>
        {/* <div style={{ height: 400, width: "100%" }}>
          <DataGrid {...data} disableColumnFilter />
        </div> */}
      </Helmet>
    </React.Fragment>
  );
};

export default Cars;

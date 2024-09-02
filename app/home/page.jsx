import React from "react";
import Table from "../table/page";
import AddData from "@/components/AddData";

const Home = () => {
  return (
    <div className="row gy-3">
      <div className="header">expense tracker</div>
      <div className="col-md-6">
        <Table />
      </div>
      <div className="col-md-6">
        <AddData />
      </div>
    </div>
  );
};

export default Home;

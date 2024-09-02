"use client";
import moment from "moment";
import React, { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    const res = JSON.parse(localStorage.getItem("Data"));
    setData(res);
  };

  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 1000);
  }, []);
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">due date</th>
          <th scope="col">description</th>
          <th scope="col">amount</th>
          <th scope="col">type</th>
          <th scope="col">status</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((x) => {
          return (
            <tr key={x.id}>
              <td>{x.date}</td>
              <td>{x.description}</td>
              <td>{x.amount}</td>
              <td>{x.type}</td>
              <td>{x.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

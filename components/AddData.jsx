"use client";
import moment from "moment";
import { useEffect, useState } from "react";

const AddData = () => {
  const [formData, setFormData] = useState({
    id: Math.random(),
    date: "",
    description: "",
    amount: "",
    type: "",
    status: "",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("Data")) || [];
    setData(storedData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = { ...formData };
    const updatedData = [...data, newData];
    setData(updatedData);

    localStorage.setItem("Data", JSON.stringify(updatedData));

    setFormData({
      date: "",
      description: "",
      amount: "",
      type: "",
      status: "",
    });
  };

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="date"
            name="date"
            id=""
            className="form-control"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="description"
            id=""
            className="form-control"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <label>Description</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="amount"
            id=""
            className="form-control"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
          />
          <label>Amount</label>
        </div>
        <div className="form-control mb-3">
          <label className="mb-3">Type</label>
          <select
            name="type"
            id=""
            className="form-control mb-3"
            value={formData.type}
            onChange={handleChange}
          >
            <option>---</option>
            <option value="Bills">Bills</option>
            <option value="Cat Expense">Cat Expense</option>
            <option value="Debt">Debt</option>
            <option value="Subscriptions">Subscriptions</option>
            <option value="Order Online">Order Online</option>
            <option value="Other">Other</option>
            <option value="Savings">Savings</option>
          </select>
        </div>
        <div className="form-control mb-3">
          <label className="mb-3">Status</label>
          <select
            name="status"
            id=""
            className="form-control mb-3"
            value={formData.status}
            onChange={handleChange}
          >
            <option>---</option>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>
        </div>
        <button className="form-control btn_add" type="submit">
          add data
        </button>
      </form>
    </>
  );
};

export default AddData;

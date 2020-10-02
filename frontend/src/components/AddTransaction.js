import React, { useState } from "react";
import Actions from "../axios/Actions";

const AddTransaction = () => {
  const initialTransactionState = {
    name: "",
    label: "",
    auto_pay: true,
    amount_due: 0,
    due_date: "",
  };
  const [transaction, setTransaction] = useState(initialTransactionState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const saveTransaction = () => {
    var data = {
      name: transaction.name,
      label: transaction.label,
      auto_pay: transaction.auto_pay,
      amount_due: transaction.amount_due,
      due_date: transaction.due_date,
    };
    Actions.create(data)
      .then((response) => {
        setTransaction({
          name: response.data.name,
          label: response.data.label,
          auto_pay: response.data.auto_pay,
          amount_due: response.data.amount_due,
          due_date: response.data.due_date,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newTransaction = () => {
    setTransaction(initialTransactionState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTransaction}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Item</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={transaction.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <div>
            <select
              name="label"
              value={transaction.label}
              className="custom-select custom-select-sm"
              onChange={handleInputChange}
            >
              <option value="CC">Credit Card</option>
              <option value="MG">Mortgage</option>
              <option value="SL">Student Loans</option>
              <option value="ME">Monthly Expense</option>
              <option value="CR">Credit</option>
              <option value="HE">Home Expense</option>
              <option value="ET">Entertainment</option>
              <option value="HC">Health Care</option>
              <option value="OTE">Other</option>
            </select>
          </div>
          <div className="form-check">
            <input
              onChange={handleInputChange}
              className="form-check-input"
              type="radio"
              name="auto_pay"
              id="exampleRadios1"
              value={transaction.auto_pay}
              checked
            ></input>
            <label className="form-check-label" htmlFor="exampleRadios1">
              AutoPay
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="description">Amount</label>
            <input
              type="number"
              className="form-control"
              id="amount_due"
              required
              value={transaction.amount_due}
              onChange={handleInputChange}
              name="amount_due"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Date</label>
            <input
              type="date"
              className="form-control"
              id="due_date"
              required
              value={transaction.due_date}
              onChange={handleInputChange}
              name="due_date"
            />
          </div>

          <button onClick={saveTransaction} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTransaction;

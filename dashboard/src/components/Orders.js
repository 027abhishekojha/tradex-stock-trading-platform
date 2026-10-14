import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setAllOrders(res.data)
    });
  }, []);
  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        {/* <table>
          <thead>
            <tr>
            <th>Order</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          </thead>
          {
            allOrders.map((stocks, index) => {
           
              return (
                <tbody>
                  <tr key={index}>
                    <td>{stocks.name}</td>
                    <td>{stocks.qty}</td>
                    <td>{stocks.price}</td>
                    <td><span className={`badge ${stocks.mode === "BUY" ? "text-bg-success" : "text-bg-danger"}`}>{stocks.mode}</span></td>
                  </tr>
                </tbody>
              )
            })
          }
        </table> */}
        <table>
          <thead>
            <tr>
            <th>Order</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          </thead>
          <tbody>
            {allOrders.map((stocks, index) => (
              <tr key={stocks._id || index}>
                <td>{stocks.name}</td>
                <td>{stocks.qty}</td>
                <td>{stocks.price}</td>
                <td>
                  <span
                    className={`badge ${stocks.mode === "BUY" ? "text-bg-success" : "text-bg-danger"
                      }`}
                  >
                    {stocks.mode}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;

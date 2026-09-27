import React from "react";
import { positions } from "../data/data";


const Positions = () => {
  return (
    <>
      <h3 className="title">Positions (2)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {
            positions.map((stocks, index) => {
              const currvalue = stocks.qty * stocks.price
              let isProfit;
              isProfit = currvalue - stocks.avg * stocks.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stocks.isLoss ? "loss" : "profit";
              return (
                  <tbody>
                  <tr>
                    <th>{stocks.product}</th>
                    <th>{stocks.name}</th>
                    <th>{stocks.qty}</th>
                    <th>{stocks.avg}</th>
                    <td className={profClass}>{(currvalue - stocks.avg * stocks.qty).toFixed(2)}</td>
                    <td className={profClass}>{stocks.net}</td>
                    <td className={dayClass}>{stocks.day}</td>
                  </tr>
                  </tbody>
              )

            })
          }
        </table>
      </div>
    </>
  );
};

export default Positions;

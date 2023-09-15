import React from "react";
import { useState, useContext } from "react";
import { AppContext } from "../App.js";

export const Data = (props) => {
  const [cdValue, setCdValue] = useState([]);

  const data = data.filter((item) => {
    setCdValue(item.location === country);
  });

  const { FIELD1, title, degrees, funds, date, location } = props.data;
  const { country, course } = useContext(AppContext);

  return <div>{location}</div>;
};

// const [cdValue, setCdValue] = useState([]);

// const data = data.filter((item) => {
//   setCdValue(item.code.startsWith("CD_"));
//   return item.code.startsWith("CD_");
// });
// export default Data;

//  FIELD1: 0,
//     title: "Schaefer Halleen's Social Equity Scholarship",
//     degrees: "Master, Bachelor, Phd",
//     funds: "$1000",
//     date: "30 June 2022",
//     location: "united-states",

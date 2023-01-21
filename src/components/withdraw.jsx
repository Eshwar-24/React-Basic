import React from "react";
import "./style.css";
export default (props) => {
  const { id, decrement } = props;
  const decre = () => {
    decrement(id);
  };
  return <button onClick={decre}>{id}</button>;
};

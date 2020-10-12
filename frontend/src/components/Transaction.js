import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = () => {
  const { getEverything } = useContext(GlobalContext);
  console.log(getEverything);
  return <li>One</li>;
};


import React from "react";
import { Balance } from "./components/Balance";
import { MainContainer } from "./components/MainContainer";
import { GlobalProvider } from "./context/GlobalState";
// import { Transaction } from "./components/Transaction";

const App = () => {
  return (
    <GlobalProvider>
      <div className="container"></div>

      <MainContainer />
    </GlobalProvider>
  );
};

export default App;

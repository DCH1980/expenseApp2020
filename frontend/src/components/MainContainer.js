import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { TableHead } from "./TableHead";
import { AllPurchases } from "./AllPurchases";
import { Total } from "./Total";
import {Table} from './Table'
import {AddTransaction} from "./AddTransaction";
import { Balance } from "./Balance";
import { TableTwo } from './TableTwo';

export const MainContainer = () => {
    return (
    <Fragment>
      <Table />
        <AddTransaction />
        <TableTwo />
        </Fragment>
  );
};

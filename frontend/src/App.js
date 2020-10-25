import React, {useState} from 'react'
import { useQuery, useMutation, useQueryCache, QueryCache, ReactQueryCacheProvider } from 'react-query'
import Container from "./Container";
import { ReactQueryDevtools } from "react-query-devtools";
import axios from 'axios';

const queryCache = new QueryCache()

const App = () =>{
  const [transactionId, setTransactionId] = useState(-1)

  return (
    
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Container />,
      <p>some test here</p>
      {transactionId > -1 ? (
        <Transaction transactionId={transactionId} setTransactionId={setTransactionId} />
      ) : (
        <Transactions setTransactionId={setTransactionId} />
      )}
      <ReactQueryDevtools initialIsOpen />
    </ReactQueryCacheProvider>
  )
 }

function getTransactions() {
  return useQuery('expense', async () => {
    const { data } = await axios.get(
      "/api/expense"
    );
    return data
  })
}

function Transactions({ setTransactionId }) {
  const cache = useQueryCache();
  const { status, data, error, isFetching} = getTransactions()

  return (
    <div>
      <h1>Transactions</h1>
      <div>
        {status === 'loading' ? (
          "loading..."
        ) : status === "error" ? (
            <span>Error: {error.message}</span>
          ) : (
              <>
                <div>
                  {data.map((transaction) => (
                    <p key={transaction.id}>
                      <a
                        onClick={() => setTransactionId(transaction.id)}
                        href="#"
                        style={
                          cache.getQueryData(["expense", transaction.id]) 
                            ? {
                              fontWeight: "bold",
                              color: "green",
                            }
                            : {}
                        }
                      >
                        {transaction.name} {transaction.label}
                        </a>
                    </p>
                  ))}
                </div>
                <div>{isFetching ? "background updating .." : " "}</div>
              </>
        ) }
      </div>
    </div>
  )
}

const getTransactionById = async (key, id) => {
  const { data } = await axios.get(
    `/api/expense/${id}`
  )
  return data;
}

function useTransaction(transactionId) {
  return useQuery(["expense", transactionId], getTransactionById, {
    enabled: transactionId,
  })
}

function Transaction({ transactionId, setTransactionId }) {
  const { status, data, error, isFetching} = useTransaction(transactionId)
  return (
    <div>
      <div>
        <a onClick={() => setTransactionId(-1)} href="#">
          back
        </a>
      </div>
      {!transactionId || status === 'loading' ? (
        "loading..."
      ) : status === "error" ? (
          <span>Error {error.message}</span>
        ) :(
          <>
            <h1>{data.name}</h1>
            <div>
                <p>{data.label}</p>
                
                <p>{data.amount_due}</p>
                <p>{data.date_due}</p>
            </div>
            <div>{isFetching ? "background updating..." :  " "}</div>
            </>
      )}
    </div>
  )
}

export default App;
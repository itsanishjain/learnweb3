import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ethers } from "ethers";
import { useState, useEffect } from "react";

const contractAddress = "0xe74179C7FEdD06117Ec4d19971D89F3498a19100";
const abi = [
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export default function Home() {
  const btnStyle = {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px",
    fontSize: "1.5rem",
  };

  const inputStyle = {
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px",
    fontSize: "1.5rem",
  };

  const [number, setNumber] = useState();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  const retrieve = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const data = await contract.retrieve();
    console.log(data);
    setNumber(data);
  };

  const store = async () => {
    setLoading(true);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const transaction = await contract.store(parseInt(value));
    await transaction.wait();
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Learn WEB 3 DAO{" "}
          <a href="https://www.learnweb3.io/">HERE</a>
        </h1>
        <p className={styles.description}>
          <button style={btnStyle} onClick={retrieve}>
            Retrieve Number
          </button>
          <p>{number && `Number is: ${number}`}</p>
        </p>

        <p className={styles.description}>
          <input
            style={inputStyle}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <br />
          <br />
          <button style={btnStyle} onClick={store}>
            Set Number
          </button>
          {loading && <p>Loading...</p>}
        </p>

        <div className={styles.grid}></div>
      </main>
    </div>
  );
}

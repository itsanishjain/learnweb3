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

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

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
    
    // this is super important function because it connects the wallet/address with the website 
    await requestAccount();

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
        <h5 className={styles.title}>
          <span>Welcome to Learn WEB 3 DAO </span>
          <a href="https://www.learnweb3.io/">HERE</a>
        </h5>

        <div className={styles.description}>
          <button style={btnStyle} onClick={retrieve}>
            Retrieve Number
          </button>
          <p>{number && `Number is: ${number}`}</p>
        </div>

        <div className={styles.description}>
          <input
            style={inputStyle}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <p>
          <button style={btnStyle} onClick={store}>
            Set Number
          </button>
        </p>

        {loading && <p>Loading...</p>}
      </main>
    </div>
  );
}

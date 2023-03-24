import React, { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CoinInfo = ({ image, name, symbol }) => {
    const [price, setPrice] = useState(null);
    
    useEffect(() => {
        const getCoinPrice = async () => {
            const response = await fetch(
                `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=` + API_KEY
            );
        }
        getCoinPrice().catch(console.error);
    }, [symbol]);
  };
  
  export default CoinInfo;
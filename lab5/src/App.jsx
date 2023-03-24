import { useState, useEffect } from 'react'
import './App.css'
import CoinInfo from "./Components/coinInfo";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/all/coinlist?&${API_KEY}`
      );

      const json = await response.json();
      setList(json.Data);
      // console.log(json.Data)
    }
    fetchAllCoinData().catch(console.error);
  }, []);

  const searchItems = (input) => {
    setSearchInput(input);
    if (input !== "") {
      const filteredData = Object.keys(list).filter((item) => 
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(input.toLowerCase())
      )
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(list));
    }
  }

  return (
    <div className='App'>
      <h1>My Crypto List</h1>
      <input 
        type="text"
        placeholder='search...'
        onChange={(e) => searchItems(e.target.value)}
      />
      <ul>
        { searchInput.length > 0 ? 
          (
            filteredResults.map((coin) => 
              list[coin].PlatformType === "blockchain" ? 
              (
                <CoinInfo 
                  key={list[coin].FullName}
                  image = {list[coin].ImageUrl}
                  name={list[coin].FullName}
                  symbol={list[coin].Symbol}
                />
              )
              :
                null
            )
          )
          :
          (
            list && Object.entries(list).map(([coin]) => 
              list[coin].PlatformType === "blockchain" ? 
              (
                <CoinInfo 
                  key={list[coin].FullName}
                  image = {list[coin].ImageUrl}
                  name={list[coin].FullName}
                  symbol={list[coin].Symbol}
                />
              )
              :
                null
            )
          )
        }
        
      </ul>
    </div>
  )
}

export default App

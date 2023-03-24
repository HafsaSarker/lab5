import { useState, useEffect } from 'react'
import './App.css'
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null);

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

  return (
    <div className='App'>
      <h1>My Crypto List</h1>
      <ul>
        {list && Object.entries(list).map(([coin]) => 
          list[coin].PlatformType === "blockchain" ? 
          (
            <li key={list[coin].FullName}>{list[coin].FullName}</li>
          )
          :
            null
        )}
      </ul>
    </div>
  )
}

export default App

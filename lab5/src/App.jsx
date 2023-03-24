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
      console.log(json);
    }
    fetchAllCoinData().catch(console.error);
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default App

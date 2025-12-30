// import { useState } from 'react'
// import './App.css'
// import Home from "./components/Home"
// function App() {
//   const [city,setCity]=useState("New delhi");
//   return (
//    <div  className='h-screen w-screen bg-blue-800 flex justify-center p-[4%] items-center'>
//     <Home setCity={setCity}/>
//     <p>{city}</p>

//    </div>
//   )
// }

// export default App


import { useEffect, useState } from "react";
import Home from "./components/Home";
import Weather from "./components/Weather";

function App() {
  // 1. store city name
  const [city, setCity] = useState("New Delhi");

  


   
  // 2. store API response
  const [weather, setWeather] = useState(null);

  // 3. track loading & error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 4. side effect: fetch when city changes
  useEffect(() => {
    if (!city) return; // guard clause

    const fetchWeather = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}`
        );

        if (!response.ok) {
          throw new Error("City not found");
        }

        const data = await response.json();
        setWeather(data); // store API result
      } catch (err) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]); 
  


  useEffect(()=>{
    const savedCity=localStorage.getItem("city");
    if (savedCity) setCity(savedCity);

  },[]);
  useEffect(() => {
  if (city) localStorage.setItem("city", city);
}, [city]);

  return (
    <>
    <div 
    className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center flex-col "
    >
      <Home setCity={setCity} />
      <Weather weather={weather} loading={loading} error={error} />
      </div>
    </>
  );
}

export default App;

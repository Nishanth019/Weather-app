import React from 'react';
import "./App.css"
import { useState, useEffect } from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import Location from './components/Location';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import getFormattedWeatherData from './Services/WeatherService';
function App() {
  const [query, setQuery] = useState({ q: "hyderabad" })
  const [weather, setWeather] = useState(null)
  const [units, setUnits] = useState("metric")
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData(query, units).then(data => {
        setWeather(data)
        console.log(data);
      })
    }
    fetchWeather();

  }, [query, units]);

  return (
    <>
      <div className="bg">
        <div className="bg-gradient-to-r from-green-400 via-yellow-500 to-red-500 h-screen w-screen absolute z-0"></div>
      </div>
      <div className=" cn  mx-auto max-w-screen-md my-10 px-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  h-fit shadow-xl shadow-grey-400 pb-2">
        <div className="header pt-2">
          <div className="flex items-center justify-center my-6 ">
            <UilReact size={50} className="text-white text-4xl font-medium" />
            <p className="text-white text-4xl font-medium"> Weather App</p>
          </div>
        </div>
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && <div>
          <Location weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <div className="m-5"></div>
        </div>}

      </div>
    </>
  );
}

export default App;

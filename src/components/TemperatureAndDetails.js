import React from 'react'
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from "@iconscout/react-unicons";
import {  iconUrlFromCode } from '../Services/WeatherService';
export default function TemperatureAndDetails({weather:{
    lat , lon ,temp , feels_like , temp_min , temp_max , humidity , name, dt, country, sunrise, sunset , weather, speed , details , icon , timezone
}}) {
    return (
        <>
            <div className="flex items-center justify-center py-5 text-xl text-white font-medium">
                <p>{details}</p>
            </div>
            <div className="flex items-center justify-between py-3 text-white">
                <img src={iconUrlFromCode(icon)} alt="sunny" className="w-20" />
                <p className="text-5xl">{`${temp.toFixed()}°`}</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1" />
                        Real fell:
                        <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1" />
                        Humidity:
                        <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className="mr-1" />
                        Wind:
                        <span className="font-medium ml-1">1{`${speed.toFixed()} km/h`}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center align-center space-x-2 text-white text-sm py-3 mt-5">
            Latitude:
            <p className="font-light">
               <span className="font-medium ml-1">{`${lat.toFixed()}°`}</span>
            </p>
            <p className="font-light pr-1">| </p>
            Longitude:
            <p className="font-light">
                 <span className="font-medium ml-1">{`${lon.toFixed()}°`}</span>
            </p>
            <p className="font-light">|</p>
            <UilArrowUp/>
            <p className="font-light">
                High: <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
            </p>
            <p className="font-light">|</p>
            <UilArrowDown/>
            <p className="font-light">
                Low: <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
            </p>
            </div>
        </>
    )
}

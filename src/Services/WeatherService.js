
const API_KEY = "a8c5dc75c39e10297df4bfdf1f58bbe3";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const getWeatherData = (infoType , searchParams,units)=>{
    
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams , appid:API_KEY , units:units});
    console.log(url);
    return fetch(url)
        .then((res)=>res.json())
        .then((data)=>data);
    
};

const formatCurrentWeather = (data) =>{
    const {
        coord: { lon,lat},
        main: {temp , feels_like , temp_min , temp_max , humidity},
        name,
        timezone,
        dt,
        sys: {
            country, sunrise, sunset },
        weather,
        wind: {speed},
    } = data
    const {main: details , icon} = weather[0];
    return {lat , lon ,temp , feels_like , temp_min , temp_max , humidity , name, dt, country, sunrise, sunset , weather, speed , details , icon , timezone  }
}

 const getFormattedWeatherData = async(searchParams,units) =>{
    const formattedCurrentWeather = await getWeatherData('weather',searchParams,units).then(formatCurrentWeather)
    return formattedCurrentWeather;
}

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}.png`;
    


export default  getFormattedWeatherData;
export {iconUrlFromCode};
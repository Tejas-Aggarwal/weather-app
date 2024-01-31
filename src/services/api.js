import axios from 'axios'

const API_KEY = "98c4dc006c21d43e8e5b4cfec306bf16"
const API_URL = "https://api.openweathermap.org/data/2.5/weather"

export const getWeather = async (city,country) => {
    try{
       let response =  await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
       return response.data;
    }
    catch(error){
        console.log('Error while calling API :(', error.message);
        return error.response;
    }
}
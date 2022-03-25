import axios from "axios"
import "dotenv/config"
const weatherApi = async () => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?appid=" +
    process.env.WEATHER_API_KEY +
    "&q=London"
  const response = await axios.get(url).then((res: any) => {
    return res.data
  })
  return response
}
export default weatherApi

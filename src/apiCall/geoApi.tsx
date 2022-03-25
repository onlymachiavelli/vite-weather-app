import axios from "axios"

const geoApi = async () => {
  const response = await axios.get("https://api.db-ip.com/v2/free/self").then((res: any) => {
      return res.data
    })
  return response
}

export default geoApi

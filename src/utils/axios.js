import axios from 'axios'

export const customFetchTravelAgency = axios.create({
  baseURL: 'https://course-api.com/react-tours-project',
})

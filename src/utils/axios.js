import axios from 'axios'

export const customFetchTravelAgency = axios.create({
  baseURL: 'https://course-api.com/react-tours-project',
})

export const customFetchUser = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
})

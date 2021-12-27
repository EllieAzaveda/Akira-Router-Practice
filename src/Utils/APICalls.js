export const baseURL = 'https://api.nasa.gov/planetary/apod?';

export const checkForErr = (response) => {
  if(response.status >= 500) {
    return 'Uhoh! Something is wrong with our system. Please try back later.'
  } else if (!response.ok) {
    return 'Something went wrong. Please try again later.'
  } else {
    return response.json()
  }
}

export const fetchDailyFact = () => {
  return fetch(`${baseURL}api_key=xCENGAkMUeSm4npGMPsHqwBltGKg0M0FYSLHdiPw`)
  .then(checkForErr)
}
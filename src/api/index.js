export default function(baseUrl, axios) {
  const api = {
    airlines: {
      all: params => axios.get(`${baseUrl}/results.json`, params)
    }
  }

  return api
}
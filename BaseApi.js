const BASE_URL = 'http://localhost:3309'
const DEFAULT_HEADERS = {
  'Accept': 'application/json'
}

class BaseApi {
  get(path) {
    return fetch(`${BASE_URL}${path}`, { headers: DEFAULT_HEADERS })
      .then(response => response.json())
  }
}

export default BaseApi

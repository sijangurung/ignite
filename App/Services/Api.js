import {create} from 'apisauce'

const api = create({
  baseURL: 'https://gist.githubusercontent.com',
})

export default api
  .get('/stabenfeldt/14db8a93d8bffd5258e29c03e2dfe234/raw/207c7facfa8ad5c1cce20ed08d954dad4a8ee75e/token.json')
  .then((response) => response.data)

/* The result we're looking for is
  { "token": "secret-sauce" }
*/


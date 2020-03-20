const URL = 'http://192.168.0.212:8000/users';
//const URL = 'https://api.tvmaze.com/schedule?country=US&date=2017-03-13'

//TODO esto no funciona si el servidor da error con un json, porque en realidad si respondio
export default () => {
    return fetch(URL)
    .then(response => Promise.all([response, response.json()]))
}

/**
 * Returns a Fetch call
 * @param {*} fullURL
 * @param {*} method
 * @param {*} body
 */
export function callApi(fullURL, method, body, contentType) {
    return buildHeaders(contentType)
        .then(headers => fetch(fullURL, {
        method,
        headers,
        body,
    }));
}

//TODO
export function buildHeaders(contentType) {
  return new Promise((resolve, reject) => {
    const headers ={
      'Content-Type': contentType
    };
    resolve(headers);
  })
}

export function getResponse(
    path,
    method,
    body,
    contentType = 'application/json',
    dispatchActions = true,
    isFullURL = false,
  ) {
 
    return callApi(path, method, body, contentType)
      .then((response) => {
        return response;
      });
  }
// Un poco alterado para solo ejemplo EST EEREA EL DEFAULT
export function getJsonResponse(path = 'http://192.168.0.212:8000/users', method = 'GET', body = {}, contentType = 'application/json', dispatchActions = true) {
    return getResponse(path, method, body, contentType, dispatchActions)
      .then((response) => {
        const { status } = response;
        if (status === 400) {
          throw new Error('Unknown error please try again');
        }
        return response;
      })
      .then(response => parseResponse(response));
  }
  
export const fetchRequest = (url, method, body = null) => {
  const headers = {'Content-Type': 'application/json'};
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then((error) => {
      console.log(error);
    });
  });
};

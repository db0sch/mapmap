export default class MarkerService {
  static asyncFetch(form) {
    const query = new URLSearchParams(form).toString()
    console.log(query)
    return fetch(`/markers?${query}`, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
  }
}

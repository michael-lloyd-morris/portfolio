/**
 * Returns a single value off a fetched json object.
 */
export default function quickFetch(url:string, key:string) {
  return fetch(url).then(response => response.json()).then(response => response[key])
}
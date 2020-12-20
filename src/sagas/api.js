export async function callApi(method, url) {
  const res = await fetch(url, {
    method,
    headers: {
      Accept: 'application/json'
    }
  })
  return res.json()
}

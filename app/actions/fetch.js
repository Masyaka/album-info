export async function fetchData(method, url, body = null, options = {}) {
  const baseUrl = 'http://musicbrainz.org/ws/2/';
  const isFormData = body instanceof FormData;

  const response = await fetch(`${baseUrl}${url}`, {
    ...options,
    method,
    headers: isFormData
      ? {
      }
      : {
        ...options.headers,
        ...(isFormData ? body.getHeaders() : {}),
      },
    body: body && !(isFormData) ? JSON.stringify(body) : body,
  });

  if (response.status[0] === 5) {
    throw new Error(`Server error ${url}`);
  }

  if (response.status[0] === 4) {
    const e = new Error(`Bad request error ${url}`);
    e.data = await response.json();
    throw e;
  }

  return response;
}

export async function get(url) {
  const data = await fetchData('GET', url);
  return await data.json();
}

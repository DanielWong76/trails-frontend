
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const API_URL = process.env.PRODUCTION_URL || 'http://10.48.175.14:8080/api';

export class ApiError extends Error {
  constructor(message, code) {
    super(message) // (1)
    this.name = code
  }
}

const normalizeError = (error) => {
  if (error.code === 'INVALID_PAYLOAD' && error.details?.length > 0) {
    return (
      error.details[0].path[0].toUpperCase() +
      error.details[0].path.substr(1) +
      ' ' +
      error.details[0].message
    )
  }

  return error.message
}

export async function makeApiRequest(
  route: string,
  method: HttpMethod,
  data: any = undefined,
  // context?: ServerSideContext,
  signal?: AbortSignal
): Promise<any> {
  const url = `${API_URL}${route}`

  console.log(`Calling to ${url} with ${data}`)
  try {
    const response: any = await makeRequest(
      url,
      method,
      signal,
      data ? JSON.stringify(data) : undefined,
      {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${accessToken}`,
      }
    )
    const result = await response.json()
    console.log('result', result)

    // If the error is token is expired, get a new token adn re-try
    if (!response.ok)
      throw new ApiError(normalizeError(result), response.status)
    return result
  } catch (error: any) {
    console.log(`Error calling ${url}`, data, error)
    throw error
  }
}

export async function makeRequest(
  url: string,
  method: HttpMethod,
  signal?: AbortSignal,
  body: any = undefined,
  headers: any = undefined
): Promise<any> {
  const response: any = await fetch(url, {
    method,
    signal,
    body,
    headers,
  })
  return response
}

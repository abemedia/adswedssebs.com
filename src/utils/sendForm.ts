export const sendForm = async (data: unknown) => {
  const response = await fetch(process.env.GATSBY_CONTACT_API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (response.status >= 200 && response.status < 300) {
    if (response.status === 204 || response.status === 205) {
      return null
    }
    return response.json()
  }

  const message = await response.text()
  throw new Error(message.trim())
}

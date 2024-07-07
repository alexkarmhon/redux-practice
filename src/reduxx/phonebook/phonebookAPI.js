const BASE_URL = "https://65f183db034bdbecc762e42d.mockapi.io"

export const fetchContacts = async () => {
  const contacts = await fetch(`${BASE_URL}/contacts`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
  return await contacts.json();
}

export const addNewContact = async (newContact) => {
  const result = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newContact)
  })
  return await result.json();
}

export const deleteContact = async (id) => {
  const result = await fetch(`${BASE_URL}/contacts/${id}`, { method: 'DELETE' });
  return await result.json();
}
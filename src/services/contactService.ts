const KEYS = {
  contacts: 'contacts',
  contactId: 'contactId'
}

export const getDepartmentCollection = () => ([
  { id: '1', title: 'Development' },
  { id: '2', title: 'Marketing' },
  { id: '3', title: 'Accounting' },
  { id: '4', title: 'HR' },
])

export function insertContact(data) {
  let contacts = getAllContacts();
  data['id'] = generateContactId()
  contacts.push(data)
  localStorage.setItem(KEYS.contacts, JSON.stringify(contacts))
}

export function updateContact(data) {
  let contacts = getAllContacts();
  let recordIndex = contacts.findIndex(x => x.id == data.id);
  contacts[recordIndex] = { ...data }
  localStorage.setItem(KEYS.contacts, JSON.stringify(contacts));
}

export function deleteContact(id) {
  let contacts = getAllContacts();
  contacts = contacts.filter(x => x.id != id)
  localStorage.setItem(KEYS.contacts, JSON.stringify(contacts));
}

export function generateContactId() {
  if (localStorage.getItem(KEYS.contactId) == null)
      localStorage.setItem(KEYS.contactId, '0')
  var id = parseInt(localStorage.getItem(KEYS.contactId))
  localStorage.setItem(KEYS.contactId, (++id).toString())
  return id;
}

export function getAllContacts() {
  if (localStorage.getItem(KEYS.contacts) == null)
      localStorage.setItem(KEYS.contacts, JSON.stringify([]))
  let contacts = JSON.parse(localStorage.getItem(KEYS.contacts));
  //map departmentID to department title

  return contacts.map(x => ({
      ...x
  }))
}
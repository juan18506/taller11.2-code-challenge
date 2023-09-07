const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

document.getElementById('form').addEventListener('submit', submitForm)

function submitForm(e) {
  e.preventDefault()

  fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      name: document.getElementById('name').value,
      surname: document.getElementById('surname').value,
      birthdate: document.getElementById('birthdate').value,
    })
  })
    .then(res => res.json())
    .then(data => console.log(data))
}

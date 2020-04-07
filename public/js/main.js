let answers;
fetch('/answers/')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    answers = data;
  });

function handleSubmitMain(e) {
  e.preventDefault();
  document.getElementById('loginForm').style.display = 'block';
}

document
  .getElementById('loginSubmit')
  .addEventListener('click', handleSubmitLogin);

function handleSubmitLogin(e) {
  e.preventDefault();
  let id = document.getElementById('id').value;
  id = Number(id);
  let password = document.getElementById('password').value;
  let loginSuccess = false;
  answers.map((element) => {
    if (element.id === id && element.password === password) {
      loginSuccess = true;
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('formId', id);
    }
  });
  if (loginSuccess)
    document.location.href = document.location.href + '/apply.html';
  else {
    console.log(id, password);
    alert('Login Unsuccesful');
  }
}
document.getElementById('login').addEventListener('click', handleSubmitMain);

if (localStorage.getItem('loggedIn') === 'true') {
  $(location).attr('href', '/apply.html');
}
// 1. `npm install`
// 2. `npx sequelize-cli db:migrate`
// 3. `npx sequelize-cli db:seed:all`
// 4. `npx nodemon`

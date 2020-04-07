let previousForm;
if (localStorage.getItem('loggedIn')) {
  fetch('/answers/' + localStorage.getItem('formId'))
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      previousForm = data;
      console.log(previousForm);
      document.getElementById('q1').value = previousForm[0].q1;
      document.getElementById('q2').value = previousForm[0].q2;
      document.getElementById('q3').value = previousForm[0].q3;
      document.getElementById('q4').value = previousForm[0].q4;
      document.getElementById('q5').value = previousForm[0].q5;
      document.getElementById('q5').value = previousForm[0].q5;
      document.getElementById('q6').value = previousForm[0].q6;
      document.getElementById('q7').value = previousForm[0].q7;
      document.getElementById('q8').value = previousForm[0].q8;
      document.getElementById('q9').value = previousForm[0].q9;
      document.getElementById('q10').value = previousForm[0].q10;
    });
}

const form = $('#form2');
form.on('submit', submitHandler);
function submitHandler(e) {
  e.preventDefault();
  $.ajax({
    url: '/answers',
    type: 'POST',
    data: form.serialize(),
    //clears form data and displays latest reservation
  }).then(alert('Answers Submitted'));
  // .then($(location).attr('href', '/'));
}

const button = document.getElementById('submitAnswers');
button.addEventListener('click', handleBack);
function handleBack(e) {
  e.preventDefault();
  $(location).attr('href', '/');
}

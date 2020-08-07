function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById('name').value;

  Client.checkForName(formText);

  console.log('::: Form Submitted :::');
  fetch('http://localhost:2020/test')
    .then((res) => {
      console.log(res.json());
      return res.json();
    })
    .then(function (data) {
      document.getElementById('results').innerHTML = data.message;
    });
}

export { handleSubmit };

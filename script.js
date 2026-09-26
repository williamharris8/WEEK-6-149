fetch('https://freedictionaryapi.com/api/v1/entries/en/hello')
  .then((response) => {
    if (response.ok) {
    return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  });
fetch('https://freedictionaryapi.com/api/v1/entries/en/hello')
  .then((response) => {
    if (!response.ok) {
        throw new Error('Bad response');
    }
    return response.json();
  })
  .then((data) => {
    if (data.entries.length === 0) {
        console.log('Word not found');
    } else {
        console.log(data.word);
        console.log(data.entries[0].senses[0].definition);
    }
  })
  .catch((error) => {
    console.log('Error: Couldnt connect to the dictionary');
  });

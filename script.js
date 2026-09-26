async function searchWord(word){
    const container = document.getElementById('result-container');
    container.innerHTML = '';

    const response = await fetch ('https://freedictionaryapi.com/api/v1/entries/en/' + word);

    if (!response.ok) {
        container.textContent = 'Service is down';
        return;
    }

    const data = await response.json();

    if (data.entries.length === 0) {
        container.textContent = 'Word not found';
    } else {
       const h2 = document.createElement('h2');
       h2.textContent = data.word;
       container.appendChild(h2);

       const ul = document.createElement('ul');
       for (const sense of data.entries[0].senses) {
        const li = document.createElement('li');
        li.textContent = sense.definition;
        ul.appendChild(li);
       }
       container.appendChild(ul);
    }
  
}
  const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', () => {
        const word = document.getElementById('word-input').value.toLowerCase();
        searchWord(word);
    });

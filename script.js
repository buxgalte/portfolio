searchButton.addEventListener('click', performSearch);

async function performSearch() {  
    const query = searchInput.value.trim();
    if (query === '') return;

    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=10&client_id=jStQ7OZz3HHLA1PS-rqUa2Cf7rxm7DbC1tWnoYN8NyE`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data.results);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayResults(results) {
    resultsContainer.innerHTML = '';

    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('result');

        const imageElement = document.createElement('img');
        imageElement.src = result.urls.small;

        resultElement.appendChild(imageElement);
        resultsContainer.appendChild(resultElement);
    });
}
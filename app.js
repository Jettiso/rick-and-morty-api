const charContainer = document.querySelector(".chars-container");


const idTag = 42;

const fetCharacters = async () => {
    for(let i = 1; i <= idTag; i++ ) {
        await getCharacters(i);
    }
}


const getCharacters = async (id) => {
    const url = await fetch(`https://rickandmortyapi.com/api/character`);
    const res = await url.json();
    const char = await res.results;

    
    console.log(char);
    displayChars(char);
}

function displayChars(params) {
    const htmlString = params.map((character) => {
        return `<figure class="char-box">
        <div class="img-container">
            <img src=${character.image} alt="">
        </div>
        <h1>${character.name}</h1>
        <h3>${character.status}</h3>
    </figure>`
    }).join('')
   
    charContainer.innerHTML = htmlString;
}

fetCharacters();
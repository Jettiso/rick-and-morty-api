const charContainer = document.querySelector(".chars-container");


const idTag = 400   ;

const fetCharacters = async () => {

        await getCharacters();
}


let arr = [];

const getCharacters = async () => {
    for(let i = 1; i <= idTag; i++) {
        const url = await fetch(`https://rickandmortyapi.com/api/character/${i}`);
        const res = await url.json();
        const char = await res; 

        
        
        arr.push(char);
        
        displayChars(arr);
        
    }
    
}
console.log(arr);

function displayChars(params) {
    const htmlString = params.map((character) => {
        return `<figure class="char-box">
        <div class="img-container">
            <img src=${character.image} alt="">
        </div>
        <h1>${character.name}</h1>
        <h3>${character.status} - ${character.species}</h3>
    </figure>`
    }).join('')
   
    charContainer.innerHTML = htmlString;
}

fetCharacters();
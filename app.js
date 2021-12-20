const charContainer = document.querySelector(".chars-container");
const search = document.getElementById("searchBar");

const idTag = 200;

let arr = [];

const fetcCharacters = async () => {

        search.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
    
        const filteredCharacters = arr.filter((character) => {
            return (
                character.name.toLowerCase().includes(searchString) 
            );
        });
        displayChars(filteredCharacters).preventDefault;
    });

    await getCharacters();
}        








async function getCharacters() {
    for (let i = 1; i <= idTag; i++) {
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

fetcCharacters();




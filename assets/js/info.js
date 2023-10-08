console.log("funcionou");

document.body.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('more')) {
        let idPokemon = evt.target.value;
        let urlForInfo = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
        let popUpInfo = document.getElementById("info");
        popUpInfo.style.display = 'block'
        let informationInside = document.getElementById("info-inside")
        fetch(urlForInfo)
        .then((response) => response.json())
        .then((jsonBody) => {
            const types = jsonBody.types.map((typeSlot) => typeSlot.type.name)
            const [type] = types
            informationInside.innerHTML = `
            <div class='finally-info ${type}'>
                <h1>${jsonBody.name}</h1>
            
            `
        })
        
    }
}, false)

console.log("funcionou");
function toggleShinyNormal(){
    let toggle = document.getElementById("toggle-shiny-normal");
    let normal = document.getElementById("normal");
    let shiny = document.getElementById("shiny");
        if (toggle.innerHTML == "shiny"){
            normal.style.display = 'none';
            shiny.style.display = 'block';
            toggle.innerHTML = 'normal'
        }else{
            normal.style.display = 'block';
            shiny.style.display = 'none';
            toggle.innerHTML = 'shiny'
        }
}

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
            informationInside.innerHTML += `
            
            <div class='finally-info ${type}'>
            
                <div class='head-info'>
                    <img src="assets/img/left-arrow.png" class="left-arrow" />
                    <h1>${jsonBody.name}</h1>
                    <h6>#${('0000'+jsonBody.id).slice(-4)}</h6>
                </div>
                <div class="big-img">
                <button id="toggle-shiny-normal" onclick="toggleShinyNormal()">shiny</button>
                    <div class="pokemon-version">
                        <img src='${jsonBody.sprites.other.home.front_default}' id="normal" />
                        <img src='${jsonBody.sprites.other.home.front_shiny}' id="shiny" />
                    </div>  
                </div>
            </div>    
                
            
            `
          // let toggle = document.getElementById("toggle-shiny-normal");
           // toggle.addEventListener("click", toggleShinyNormal);
        })
        
    }

}, false)








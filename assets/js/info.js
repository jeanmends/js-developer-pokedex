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

function goBackToAllPokemons(){
    let informationInside = document.getElementById("info-inside")
    informationInside.innerHTML ='';
    let popUpInfo = document.getElementById("info");
    popUpInfo.style.display = 'none';
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
           const stats = jsonBody.stats.map((baseStats) => console.log(baseStats.base_stat, baseStats.stat.name))
           //const valor = jsonBody.stats.map((baseStat) => console.log(baseStat.base_stat))
            //console.log(stats);
            console.log(types);
            jsonBody.types.map((type) => console.log(type.type.name));
            const [type] = types
            informationInside.innerHTML += `
            
            <div class='finally-info ${type}'>
            
                <div class='head-info'>
                    <img src="assets/img/left-arrow.png" class="left-arrow" id="left-arrow" onclick="goBackToAllPokemons()" />
                    <h1>${jsonBody.name}</h1>
                    <h6>#${('0000'+jsonBody.id).slice(-4)}</h6>
                </div>
                <div class="big-img">
                    <div class="left-side">
                        <button id="toggle-shiny-normal" onclick="toggleShinyNormal()">shiny</button>
                        <ol class="types">
                        ${jsonBody.types.map((type) => `<li class="type ${type.type.name}">${type.type.name}</li>`).join('')}
                        </ol>
                    </div>
                    <div class="pokemon-version">
                        <img src='${jsonBody.sprites.other.home.front_default}' id="normal" />
                        <img src='${jsonBody.sprites.other.home.front_shiny}' id="shiny" />
                    </div>  
                </div>
                <div class='information-about-pokemon'>
                    <div class='weight-height'> 
                        <div class='weight'>
                            <h6>weight</h6>
                            <h1>${parseInt(jsonBody.weight) /10} kg</h1>
                        </div>
                        <div class='height'>
                            <h6>heigth </h6>
                            <h1>${(parseInt(jsonBody.height) * 0.1).toFixed(1)} m</h1>
                        </div>
                    </div>
                    <div class='base-stats'>
                        <h3>Base Stats</h3>
                        ${jsonBody.stats.map((stats) => `<p class='stats-names'> ${stats.stat.name}: ${stats.base_stat}</p>`).join('')}
                        <p class='stats-names'>Base experience: ${jsonBody.base_experience}</p>
                    </div>
                </div>
            </div>    
              
            
            `
          // let toggle = document.getElementById("toggle-shiny-normal");
           // toggle.addEventListener("click", toggleShinyNormal);
        })
        
    }

}, false)







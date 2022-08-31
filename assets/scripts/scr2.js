var user = { 'contar': true };
$(document).on("ready", preguntas());

function preguntas() {
  var elem = window.location.search.substring(3);

  let item = elem - 1;

  $.ajax({
    type: "get",
    url: "https://pokeapi.co/api/v2/pokemon/?limit=1&offset=" + item + "",
    dataType: "json"
  }).done(
    function (info) {
      const p = document.getElementById('name');
      p.innerHTML = info.results[0].name;

      $.ajax({
        type: "get",
        url: info.results[0].url,
        dataType: "json"
      }).done(
        function (info) {
          const pokeId = document.getElementById('id');
          const pokeType = document.getElementById('info');
          const img = document.getElementById('sprite');
          const h = document.getElementById('h');
          const w = document.getElementById('w');
          const another_first =  document.getElementById('another1');
          const another_second = document.getElementById('another2');
          const another_therd = document.getElementById('another3');
          pokeId.innerHTML += info.id;
          pokeType.innerHTML += info.types[0].type.name;
          img.innerHTML += `<img src="` + info.sprites.other.dream_world.front_default + `" class='' style='height: 20vh;'>`;
          h.innerHTML += info.height;
          w.innerHTML += info.weight;

          $.ajax({
            type: "get",
            url: "https://pokeapi.co/api/v2/pokemon/?limit=99&offset="+item,
            dataType: "json"
          }).done(
            (info) => {
              for (let i = 0; i < 2; i++) {
                indice += 1;
                if (indice >= 4) {
                  break;
                }
                var p = document.getElementById('another'+indice);
                p.innerHTML += `
                <div class="col-md-4 col-sm-6 my-4">
                  <div class="card py-2 px-2 text-center">
                    <div class="card-head" style="font-size: 2.5rem;">
                      <a class="text-danger" href="pokemon.html?p=`+indice+`">`+indice+` ` + info.results[a].name +`</a>
                    </div>
                    <div class='card-img-top text-center' id="img`+a+`">
                      
                    </div>
                    <div class="card-body" style="font-size: 1.5rem;" id="info`+a+`">
                      
                    </div>
                  </div>
                </div>
                `;
              }
            }
          )
        });
    });

}
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
          pokeId.innerHTML += info.id;
          pokeType.innerHTML += info.types[0].type.name;
          img.innerHTML += `<img src="` + info.sprites.other.dream_world.front_default + `" class='' style='height: 20vh;'>`;
          h.innerHTML += info.height;
          w.innerHTML += info.weight;

        });
    });
}
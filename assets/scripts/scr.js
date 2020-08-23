var user = { 'contar': true };
$(document).on("ready", preguntas());

function preguntas() {
  var elem = window.location.search.substring(3);
  var indice = 100*(elem-1);

  pag_s = document.getElementById('pag-start');
  pag_b = document.getElementById('pag-foot');
  for (let ip = 1; ip < 8; ip++) {
    pag_s.innerHTML +=`<a class='px-4 py-4 text-center text-danger' style='font-size: 1.5rem;' href="?p=`+ip+`">`+ip+`</a>`;
    pag_b.innerHTML +=`<a class='px-4 py-4 text-center text-danger' style='font-size: 1.5rem;' href="?p=`+ip+`">`+ip+`</a>`;
  }


  $.ajax({
    type: "get",
    url: "https://pokeapi.co/api/v2/pokemon/?limit=99&offset="+indice+"",
    dataType: "json"
  }).done(
    function (info) {

      const p = document.getElementById('contenedor');
      for (let a = 0; a < info.results.length; a++) {
        indice += 1;
        if (indice >= 650) {
          break;
        }
        p.innerHTML += `
        <div class="col-md-4 col-sm-6 my-4">
          <div class="card py-2 text-center">
            <div class="card-head" style="font-size: 2.5rem;">
              `+indice+` ` + info.results[a].name +
              `
            </div>
            <div class='card-img-top text-center' id="img`+a+`">
              
            </div>
            <div class="card-body" style="font-size: 1.5rem;" id="info`+a+`">
              
            </div>
          </div>
        </div>
        `;
        $.ajax({
          type: "get",
          url: info.results[a].url,
          dataType: "json"
        }).done(
          function (info) {

            const infor = document.getElementById('info'+a);
            const img = document.getElementById('img'+a);
            for (let i = 0; i < info.abilities.length; i++) {
              infor.innerHTML += `<br>` + info.abilities[i].ability.name;
            }
            infor.innerHTML += `<br>` + info.base_experience;
            img.innerHTML += `<img src="` + info.sprites.other.dream_world.front_default + `" class='' style='height: 20vh;'>`;
          });
      }
    });
}
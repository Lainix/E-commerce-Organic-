$(document).ready(() => {

  const mercado = () => {
    $.ajax({
      url: `https://api.mercadolibre.com/sites/MLA/search?q=organico`,
      type: 'GET',
      crossDomain: true,
      datatype: 'json',
      success: function (response) {
        for (var i = 0; i <= 5; i++) {
          var photo = response.results[i].thumbnail;
          console.log(photo);

          var titleProduct = response.results[i].title;
          var priceProduct = '$' + '' + response.results[i].price;
          var template = `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <img class="card-img-top" style="width: 10rem;" src="${photo}" alt="Card image cap">
                            <h5 class="card-title">${titleProduct}</h5>
                            <p class="card-text">${priceProduct}</p>
                            <a href="#" class="btn btn-primary" style="background-color:#77a8a8">Comprar</a>
                        </div>
                     </div>`;

          $('#product').append(template);
        };
      }
    }).done((response) => {
      console.log(response);
      console.log(response.results["0"].thumbnail);
    });
  }
  mercado();

  const porductosOrganicos = () => {
    $.ajax({
      url: `https://api.mercadolibre.com/sites/MLA/search?q=productos%20organico`,
      type: 'GET',
      crossDomain: true,
      datatype: 'json',
      success: function (response) {
        for (var i = 0; i <= 5; i++) {
          var photo = response.results[i].thumbnail;
          console.log(photo);

          var titleProduct = response.results[i].title;
          var priceProduct = '$' + '' + response.results[i].price;
          var template = `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <img class="card-img-top" style="width: 10rem;" src="${photo}" alt="Card image cap">
                            <h5 class="card-title">${titleProduct}</h5>
                            <p class="card-text">${priceProduct}</p>
                            <a href="#" class="btn btn-primary" style="background-color:#77a8a8">Comprar</a>
                        </div>
                     </div>`;

          $('#productOrganic').append(template);
        };
      }
    }).done((response) => {
      console.log(response);
      console.log(response.results["0"].thumbnail);
    });
  }
  porductosOrganicos();

  $('#ejecutar').on('click', function () {
    $('caja').slideUp(1000, mercado);

  });

});





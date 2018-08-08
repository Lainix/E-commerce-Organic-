$(document).ready(() => {

  $('#ejecutar').on('click', function () {
    $('.caja').show();
    $('.caja2').hide();
  });
  
  $('#ejecutar2').on('click', function () {
    $('.caja2').show();
    $('.caja').hide();
  });

  $('#cart').on('click', function () {
    $('#cart-items').show();
  });

  $('#close').on('click', function () {
    $('#cart-items').hide();
  });

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
                            <a href="#" class="btn" id="paypal">Paypal</a>
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
                            <a href="#" class="btn" id="paypal">Paypal</a>
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

    paypal.Button.render({
    env: 'sandbox',
    client: {
      sandbox: 'demo_sandbox_client_id'
    },
    style: {
      color: 'gold',   // 'gold, 'blue', 'silver', 'black'
      size:  'medium', // 'medium', 'small', 'large', 'responsive'
      shape: 'rect'    // 'rect', 'pill'
    },
    payment: function (data, actions) {
      return actions.payment.create({
        transactions: [{
          amount: {
            total: '0.01',
            currency: 'USD'
          }
        }]
      });
    },
    onAuthorize: function (data, actions) {
      return actions.payment.execute()
        .then(function () {
          window.alert('Thank you for your purchase!');
        });
    }
  }, '#paypal-button');

});





function getDataMenu () {
  return $.getJSON('data/pizza.json', function (data) {
  const menus = data.menu;
  $.each(menus, function (i, data) {
    $('#daftar-menu').append(`
        <div class="col-md-4 col-sm- mb-3">
        <div class="card">
          <img src="img/menu/${data.gambar}" class="card-img-top" alt="wpu-hat">
          <div class="card-body">
            <h5 class="card-title">${data.nama}</h5>
            <p class="card-text text-muted">${data.deskripsi}</p>
            <h5 class="card-title">Rp. ${data.harga}</h5>
            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
          </div>
        </div>
      </div>
      `)
  })
})
}

getDataMenu()

$('.nav-link').on('click', function() {
  $('.nav-link').removeClass('active')
  $(this).addClass('active')

  let kategori = $(this).html();
  $('h1').html(kategori)

  if(kategori === 'All Menu') {
    $('#daftar-menu').html('');
    getDataMenu();
    return;
  }

  $.getJSON('data/pizza.json', function (data) {
    let menu = data.menu;
    let content = '';

    $.each(menu, function (i, data) {
      if(data.kategori === kategori.toLowerCase()) {
        content += `
        <div class="col-md-4 mb-3">
        <div class="card">
          <img src="img/menu/${data.gambar}" class="card-img-top" alt="wpu-hat">
          <div class="card-body">
            <h5 class="card-title">${data.nama}</h5>
            <p class="card-text text-muted">${data.deskripsi}</p>
            <h5 class="card-title">Rp. ${data.harga}</h5>
            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
          </div>
        </div>
      </div>
      `
      }
    })

    $('#daftar-menu').html(content)
  })
})

var url = 'https://my-json-server.typicode.com/FLX3/DB/db';

//https://raw.githubusercontent.com/FLX3/DB/main/db.json
$(function() {
  $.get(url, function(myJson) {
    $.each(myJson.samochody, function(i, week) {  
         $('[data-toggle="popover"]').popover({ 
    html : true,
    content: function() {
      return $('#popover_content_wrapper').html();
    }
  });
        var car = "<div class='car'><div class='car-wrapper'><div class='car__img' style='background-image:url("+this.zdjecie+");'></div><h3>"+this.marka+"<span>"+this.model+"</span></h3><div class='car__btn'><a href='#"+this.marka+"' role='button'  class='btn-yellow' data-toggle='modal'>Wybierz</a></div></div></div></div>"; 
        $("div.cars").append(car);
        var cennik = '<div class="container"><div class="row"><div class="col">Dzień</div><div class="col">'+this.cena.dzien+' zł</div><div class="w-100"></div><div class="col">Weekend</div><div class="col">'+this.cena.weekend+' zł</div><div class="w-100"></div><div class="col">Tydzień</div><div class="col">'+this.cena.tydzien+' zł</div><div class="w-100"></div><div class="col">Miesiąc</div><div class="col">'+this.cena.miesiac+' zł</div></div></div>';
        var infocar = "<div id='"+this.marka+"' class='modal fade' tabindex='-1'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h5 class='modal-title'>"+this.marka+" "+this.model+"</h5><button type='button' class='close' data-dismiss='modal'>&times;</button></div><div class='modal-body'><div class='car__img' style='background-image:url("+this.zdjecie+");'></div><h5>Dane techniczne</h5><div class='container'><div class='row'><div class='col'>Rok produkcji: "+this.rok_produkcji+"</div><div class='col'>Ilość miejsc: "+this.ilosc_miejsc+"</div><div class='w-100'></div><div class='col'>Pojemność silnika: "+this.silnik+"</div><div class='col'>Moc: "+this.moc+" KM</div><div class='w-100'></div><div class='col'>Rodzaj paliwa: "+this.rodzaj_paliwa+"</div><div class='col'>Napęd: "+this.naped+"</div></div></div><div class='price'><button type='button' class='btn btn-secondary' data-container='body' data-toggle='popover' data-placement='top' data-content='"+cennik+"' data-original-title='Cennik' title=''>Cennik</button></div></div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'>Anuluj</button></div></div></div></div>";
        $("div.info").append(infocar);
    });
  });
});
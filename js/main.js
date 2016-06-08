$('#mensaje').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})
function insertMessage() {
  var mostrartiempo = mostrarHora();
  msg = $('#mensaje').val();
  if (msg != "") {
  	$('.pane-chat-msgs').append('<div class="total-i"><div class="msg-i"><div class="message-i"><div class="bubble-i"><div class="message-text-i t-right"><span>'+msg+'</span></div><div class="time-chat t-right"> <span class="time">' + mostrartiempo +'</span></div></div></div></div></div>');
  }
  cleanMensaje();
}
function cleanMensaje(){
  $("#mensaje").val("")
  $("#mensaje").focus()
}
var mostrarHora = function(){
var fechas = new Date();
var minutos=fechas.getMinutes()
  if(minutos<10)
    minutos="0"+minutos
var horas=fechas.getHours()
  if(horas<10)
    horas="0"+horas
var time = horas+":"+minutos;
  return time;
}

$("#buscar").on("keyup", buscar);

function buscar(){
  var contacto = $(".contact");
  var texto    = $("#buscar").val();
  var noItems = $('<li id="no-items-found">No items found</li>');
  texto        = texto.toLowerCase();
  contacto.show();
  for(var i=0; i< contacto.size(); i++){
    var contenido = contacto.eq(i).text();
    contenido     = contenido.toLowerCase();
    var index     = contenido.indexOf(texto);
    if(index == -1){
      contacto.eq(i).hide();
    }
  }
}

$(document).ready(function(){ 
  $(".contact").on('click',function(){

      var valordata = $(this).attr("data");
      var nombre = contacto[valordata].nombre;
      var src = contacto[valordata].src;
      var info = contacto[valordata].info;

      $("#nombrecontacto").text(nombre);
      $("#imagencontacto").attr("src",src);
      $("#infoadd").text(info);


        var conversa= document.getElementById("conversa");
        conversa.innerHTML= '';
  })
});
    

var contacto =  [{
              nombre:"Laboratoria Perú",
              src:"image/logocodeacademy.png",
              info:"Ana Maria, Aldo, Gian, Mariana, Papu, Tú"
            },{
              nombre:"Raymi Saldomando",
              src:"image/raymi.jpg",
              info: "ultima conexión 3/06/16"
            },{
              nombre:"Mariana Costa",
              src:"image/mariana.jpg",
              info: "ultima conexión 8/06/16"
            },{
              nombre:"Ana María Martinez Franklin",
              src:"image/anamaria.jpg",
              info: "ultima conexión 8/06/16"
            },{
              nombre:"Rodulfo Prieto",
              src:"image/rodulfo.jpg",
              info: "ultima conexión 8/06/16"
            },{
              nombre:"Andrea Lamas",
              src:"image/andrea.jpg",
              info: "ultima conexión 13:14"
            },{
              nombre:"Maria Paula Rivarola",
              src:"image/mariapaula.jpg",
              info: "ultima conexión 10/05/16"
            },{
              nombre:"Katy Sanchez",
              src:"image/Katy.jpg",
              info: "ultima conexión 01/06/16"
            },{
              nombre:"Aldo Alfaro",
              src:"image/aldo.jpg",
              info: "ultima conexión 02/06/16"
            }];
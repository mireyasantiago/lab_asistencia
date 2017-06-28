var api ={
  url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};
var cargarPagina = function () {
	cargarListaAlumnas();
};

alert("ssdf");

var api ={
  url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};
var cargarPagina = function () {
	cargarListaAlumnas();
};

var cargarListaAlumnas = function (){
  $.getJSON(api.url, function(alumnas){

    alumnas.forEach(cargarLista);
  });
};

/*var plantillaLista = '<li>' +
	'__nombre__' +
	'__apellidoP__' +
	'__apellidoM__'+
	'<input type="checkbox">' +
	'</li>';*/
  var plantillaLista = '<tr>' +
      '<td>__nombre__</td>' +
      '<td>__apellidoP__</td>' +
      '<td>__apellidoM__</td>' +
      '<td><input type="checkbox"></td>' +
    '</tr>' ;

var cargarLista = function () {
	$.getJSON(api.url, function (elementos) {
		elementos.forEach(mostrarAlumnas)
	});
};

var mostrarAlumnas = function (alumna) {
  console.log(alumna);
	var plantillaFinal = " ";

	var nombreAlumna = alumna.name;
	var apellidoPaterno = alumna.pLastName;
	var apellidoMaterno = alumna.mLastName;

	plantillaFinal += plantillaLista
			.replace("__nombre__", nombreAlumna)
			.replace("__apellidoP__", apellidoPaterno)
			.replace("__apellidoM__", apellidoMaterno)

	$("#nombreDeAlumnas").prepend(plantillaFinal);
};
$(document).ready(cargarPagina);

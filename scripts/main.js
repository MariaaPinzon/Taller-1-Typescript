import { data } from './data.js';
var conciertosTable = document.getElementById("conciertos");
var divAverage = document.getElementById("average");
mostrarDatosConciertos(data);
mostrarAverage(data);
function mostrarDatosConciertos(conciertos) {
    for (var _i = 0, conciertos_1 = conciertos; _i < conciertos_1.length; _i++) {
        var concierto = conciertos_1[_i];
        var row = document.createElement("tr");
        row.appendChild(document.createElement("td")).innerHTML = "<b>".concat(concierto.getID(), "</b>");
        row.appendChild(document.createElement("td")).innerText = concierto.getTitulo();
        row.appendChild(document.createElement("td")).innerText = concierto.getDescripcion();
        row.appendChild(document.createElement("td")).innerText = concierto.getSetList1().join(", ");
        conciertosTable.appendChild(row);
    }
}
function mostrarAverage(conciertos) {
    var average = 0;
    for (var _i = 0, conciertos_2 = conciertos; _i < conciertos_2.length; _i++) {
        var concierto = conciertos_2[_i];
        average += concierto.getVentas();
    }
    average = average / conciertos.length;
    var averageRounded = parseFloat(average.toFixed(2));
    divAverage.innerHTML = "<p><b>Promedio de Ventas: </b>".concat(averageRounded, "</p>");
}

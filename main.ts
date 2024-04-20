import { data } from './data.js';
import { Concierto } from './concierto.js';

let conciertosTable: HTMLElement = document.getElementById("conciertos")!;
let divAverage : HTMLElement = document.getElementById("average")!;


mostrarDatosConciertos(data);
mostrarAverage(data);

function mostrarDatosConciertos(conciertos: Concierto[]): void {
    for (let concierto of conciertos) {
        let row: HTMLElement = document.createElement("tr");
        row.appendChild(document.createElement("td")).innerHTML = `<b>${concierto.getID()}</b>`;
        row.appendChild(document.createElement("td")).innerText = concierto.getTitulo();
        row.appendChild(document.createElement("td")).innerText = concierto.getDescripcion();
        row.appendChild(document.createElement("td")).innerText = concierto.getSetList1().join(", ");
        conciertosTable.appendChild(row);
    }
}

function mostrarAverage(conciertos : Concierto[]){
    let average = 0;
    for(let concierto of conciertos){
        average += concierto.getVentas();
    }
    average = average/conciertos.length;
    let averageRounded = parseFloat(average.toFixed(2)); 
    divAverage.innerHTML = `<p><b>Promedio de Ventas: </b>${averageRounded}</p>`;}
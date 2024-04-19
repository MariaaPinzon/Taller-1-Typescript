import { data } from './data.js';
import { Concierto } from './concierto.js';

let conciertosTable: HTMLElement = document.getElementById("conciertos")!;

mostrarDatosConciertos(data);

function mostrarDatosConciertos(conciertos: Concierto[]): void {
    for (let concierto of conciertos) {
        let row = document.createElement("tr");
        let tituloCell = document.createElement("td");
        
        row.appendChild(document.createElement("td")).innerHTML = `<b>${concierto.getID()}</b>`;
        row.appendChild(tituloCell);
        row.appendChild(document.createElement("td")).innerText = concierto.getDescripcion();
        row.appendChild(document.createElement("td")).innerText = concierto.getSetList1().join(", "); // Suponiendo que getSetList1 devuelve un array de strings
        conciertosTable.appendChild(row);
    }
}


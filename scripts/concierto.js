var Concierto = /** @class */ (function () {
    function Concierto(id, titulo, descripcion, imagen, setList1, setList2, setList3, setList4, setList5, setList6, setList7, setList8, imagenModa1, imagenModa2, textoModa1, textoModa2, ventas) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagenPrincipal = imagen;
        this.setList1 = setList1;
        this.setList2 = setList2;
        this.setList3 = setList3;
        this.setList4 = setList4;
        this.setList5 = setList5;
        this.setList6 = setList6;
        this.setList7 = setList7;
        this.setList8 = setList8;
        this.imagenModa1 = imagenModa1;
        this.imagenModa2 = imagenModa2;
        this.textoModa1 = textoModa1;
        this.textoModa2 = textoModa2;
        this.ventas = ventas;
    }
    Concierto.prototype.getID = function () {
        return this.id;
    };
    Concierto.prototype.getTitulo = function () {
        return this.titulo;
    };
    Concierto.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Concierto.prototype.getImagenPrincipal = function () {
        return this.imagenPrincipal;
    };
    Concierto.prototype.getSetList1 = function () {
        return this.setList1;
    };
    Concierto.prototype.getSetList2 = function () {
        return this.setList2;
    };
    Concierto.prototype.getSetList3 = function () {
        return this.setList3;
    };
    Concierto.prototype.getSetList4 = function () {
        return this.setList4;
    };
    Concierto.prototype.getSetList5 = function () {
        return this.setList5;
    };
    Concierto.prototype.getSetList6 = function () {
        return this.setList6;
    };
    Concierto.prototype.getSetList7 = function () {
        return this.setList7;
    };
    Concierto.prototype.getSetList8 = function () {
        return this.setList8;
    };
    Concierto.prototype.getImagenModa1 = function () {
        return this.imagenModa1;
    };
    Concierto.prototype.getImagenModa2 = function () {
        return this.imagenModa2;
    };
    Concierto.prototype.getTextoModa1 = function () {
        return this.textoModa1;
    };
    Concierto.prototype.getTextoModa2 = function () {
        return this.textoModa2;
    };
    Concierto.prototype.getVentas = function () {
        return this.ventas;
    };
    return Concierto;
}());
export { Concierto };

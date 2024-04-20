export class Concierto {
    id :number;
    titulo: string;
    descripcion: string;
    imagenPrincipal: string;
    setList1: Array<string>;
    setList2: Array<string>;
    setList3: Array<string>;
    setList4: Array<string>;
    setList5: Array<string>;
    setList6: Array<string>;
    setList7: Array<string>;
    setList8: Array<string>;
    imagenModa1: string;
    imagenModa2: string;
    textoModa1: string;
    textoModa2: string;
    ventas: number;

   constructor(id:number, titulo: string, descripcion: string, imagen: string, setList1: string[], setList2: string[], setList3: string[], setList4: string[], setList5: string[], setList6: string[], setList7: string[], setList8: string[], imagenModa1: string, imagenModa2: string, textoModa1: string, textoModa2: string, ventas: number) {
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

   public getID():number{
       return this.id;
   }
       public getTitulo(): string {
       return this.titulo;
   }

   public getDescripcion(): string {
       return this.descripcion;
   }

   public getImagenPrincipal(): string {
       return this.imagenPrincipal;
   }

   public getSetList1(): Array<string> {
       return this.setList1;
   }

   public getSetList2(): Array<string> {
       return this.setList2;
   }

   public getSetList3(): Array<string> {
       return this.setList3;
   }

   public getSetList4(): Array<string> {
       return this.setList4;
   }

   public getSetList5(): Array<string> {
       return this.setList5;
   }

   public getSetList6(): Array<string> {
       return this.setList6;
   }

   public getSetList7(): Array<string> {
       return this.setList7;
   }

   public getSetList8(): Array<string> {
       return this.setList8;
   }

   public getImagenModa1(): string {
       return this.imagenModa1;
   }

   public getImagenModa2(): string {
       return this.imagenModa2;
   }

   public getTextoModa1(): string {
       return this.textoModa1;
   }

   public getTextoModa2(): string {
       return this.textoModa2;
   }
   public getVentas(): number {
        return this.ventas;
   }
}

import { Cliente } from "./cliente.model";
import { Trabajador } from "./trabajador.model";
import { Productos } from "./productos.model";

export class Venta {

    idven?: number;
    fecha?: Date;
    tipocom?: string;
    cantidad?: number;
    preciov?: number;
}

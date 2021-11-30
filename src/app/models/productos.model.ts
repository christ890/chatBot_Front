import { Categoria } from './categoria.model';
import { Proveedores } from './proveedores.model';
export class Productos {
    idpro?: number;
    descripcion?: string;
    precio?: number;
    stock?: number;
    categoria?: Categoria;
    proveedor?: Proveedores;
}

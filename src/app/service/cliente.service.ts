import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';



const baseUrl = 'http://localhost:8080/api/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  listarCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(baseUrl + "/listarClientes");
  }

  registra(aux: Cliente): Observable<any> {
    return this.http.post<any>(baseUrl + "/registraCliente", aux);
  }


  actualiza(aux: Cliente): Observable<any> {
    return this.http.put<any>(baseUrl + "/actualizaCliente", aux);
<<<<<<< HEAD

}
eliminar(id: number) {
  const url = `${baseUrl}/${id}`;
  return this.http.delete(url);
}
=======
  


}

>>>>>>> c35634ec8999a3b7849c836623ce360c8ce2770b
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ConsultaCepService {
  constructor(private http: HttpClient) {}

  consultarCep(cep: string) {
    //let cep = this.forme.get("endereco.cep")!.value;
    cep = cep.replace(/\D/g, "");
    console.log(">>>>", cep);
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.http
          .get("https://viacep.com.br/ws/" + cep + "/json")
          .pipe(map((dados: any) => dados));
      }
    }

    return of({});
  }
}

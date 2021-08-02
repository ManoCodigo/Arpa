import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DropdownService {
  constructor(private http: HttpClient) {}

  getEstadosBr() {
    return this.http
      .get("assests/dados/estadosbr.json")
      .map((res: any) => res.json());
  }

  getCargos() {
    return [
      { nome: "Dev", nivel: "Junior", Desc: "Dev Junior" },
      { nome: "Dev", nivel: "Pleno", Desc: "Dev Pleno" },
      { nome: "Dev", nivel: "Senior", Desc: "Dev Senior" },
    ];
  }
}

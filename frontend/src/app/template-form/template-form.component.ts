import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import "rxjs/add/operator/map";
import { map } from "rxjs/operators";
import "rxjs-compat/add/operator/map";
import { ProductsService } from "../components/products/products.service";
import { ConsultaCepService } from "../components/service/consulta-cep.service";

@Component({
  selector: "app-template-form",
  templateUrl: "./template-form.component.html",
  styleUrls: ["./template-form.component.css"],
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    nome: "",
    email: "",
    cep: "",
    numero: "",
    complemento: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
  };

  constructor(
    private http: HttpClient,
    private productService: ProductsService,
    private cepService: ConsultaCepService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.http
      .post("https://httpbin.org/post", JSON.stringify(form.value))
      .map((res) => res)
      .subscribe((dados) => {
        console.log(dados);
        form.reset();
      });

    this.productService.showMessage("Formulário Enviado!");
  }

  consultaCep(cep: string, form: NgForm) {
    if (cep != null && cep !== "") {
      this.cepService
        .consultarCep(cep)
        .subscribe((dados: any) => this.populaDados(dados, form));
    }
  }

  populaDados(dados: any, form: NgForm) {
    console.log(">>", form.value);
    form.setValue({
      nome: form.value.nome,
      email: form.value.email,
      endereço: {
        cep: dados.cep,
        numero: "",
        complemento: "",
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });
  }

  limpaForm(form: NgForm) {
    form.reset();
  }
}

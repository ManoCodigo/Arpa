import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ProductsService } from "../components/products/products.service";
import "rxjs/add/operator/map";
import { map } from "rxjs/operators";
import "rxjs-compat/add/operator/map";
import { EstadoBr } from "../estado.model";
import { DropdownService } from "../components/service/dropdown.service";
import { ConsultaCepService } from "../components/service/consulta-cep.service";

@Component({
  selector: "app-data-form",
  templateUrl: "./data-form.component.html",
  styleUrls: ["./data-form.component.css"],
})
export class DataFormComponent implements OnInit {
  forme!: FormGroup;
  estado!: EstadoBr[];
  cargo!: any[];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private productService: ProductsService,
    private drop: DropdownService,
    private cepService: ConsultaCepService
  ) {}

  ngOnInit(): void {
    this.forme = this.formBuilder.group({
      nome: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: ["", Validators.required],
        numero: ["", Validators.required],
        complemento: [""],
        rua: ["", Validators.required],
        bairro: ["", Validators.required],
        cidade: ["", Validators.required],
        estado: [""],
      }),
      cargo: [null],
    });

    this.drop.getEstadosBr().subscribe((dados) => {
      (this.estado = dados), console.log(dados);
    });

    this.cargo = this.drop.getCargos();
  }

  onSubmit() {
    console.log(this.forme);

    if (this.forme.valid) {
      this.http
        .post("https://httpbin.org/post", JSON.stringify(this.forme.value))
        .map((res) => res)
        .subscribe(
          (dados) => {
            console.log(dados);
            this.productService.showMessage("Formulário Enviado!");
            this.limparForme();
          },
          (error: any) =>
            this.productService.showMessage("Erro ao Enviar Formulário", true)
        );
    } else {
      console.log("Formulario invalido");
      this.productService.showMessage("Preencha os campos corretamente!", true);
      // this.verificaValidacaoForme(this.forme)
    }
  }

  // verificaValidacaoForme(form: FormGroup){
  //   Object.keys(this.forme.controls).forEach(campo => {
  //     console.log(campo)
  //     const controle  = this.forme.get(campo)
  //     controle!.markAsDirty()
  //     if (controle instanceof FormGroup)
  //     this.verificaValidacaoForme(controle)
  //   })

  // }

  limparForme() {
    this.forme.reset();
  }

  errorEmail() {
    let emailValid = this.forme.get("email");
    if (emailValid!.errors) {
      this.productService.showMessage("Email Inválido!", true);
      return emailValid!.errors.email;
    }
  }

  consultaCep() {
    let cep = this.forme.get("endereco.cep")!.value;

    if (cep != null && cep !== "") {
      this.cepService
        .consultarCep(cep)
        .subscribe((dados: any) => this.populaDados(dados));
    }
  }

  populaDados(dados: any) {
    console.log(">>", this.forme.value);
    this.forme.patchValue({
      nome: this.forme.value.nome,
      email: this.forme.value.email,
      endereco: {
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

  //Por algum motivo não funciona
  validaCampo() {
    this.forme.controls["email"].valid && this.forme.controls["email"].touched;
  }
}

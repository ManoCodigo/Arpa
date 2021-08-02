import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-debu',
  templateUrl: './form-debu.component.html',
  styleUrls: ['./form-debu.component.css']
})
export class FormDebuComponent implements OnInit {

  @Input() form: any;

  constructor() { }

  ngOnInit(): void {
  }

}

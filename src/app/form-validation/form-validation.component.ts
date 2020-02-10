import { Component, OnInit } from '@angular/core';
import { FormObject } from '../classes/form-object';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  model: FormObject;

  constructor() { }

  ngOnInit(): void {
    this.model = new FormObject();
  }

  onSubmit() {
    console.log('Soumission du formulaire $JSON.stringify(this.model)');
  }

}

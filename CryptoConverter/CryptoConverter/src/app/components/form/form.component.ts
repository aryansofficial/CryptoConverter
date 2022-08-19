import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  checkValues!: FormGroup
  ngOnInit(): void {
    this.checkValues= this.fb.group({
      first: ["", Validators.required],
      second: ["", Validators.required]
    },{validators: this.PasswordChecker2('first', 'second')})
  }

  
  private PasswordChecker2(first:string, second:string){
    return (formGroup: FormGroup) => {
      const firstCheck = formGroup.controls[first];
      const secondCheck = formGroup.controls[second];

      if (firstCheck.value !== secondCheck.value){
        secondCheck.setErrors({mustMatch: true})
      } else {
        secondCheck.setErrors(null)
      }
    }
  }

}

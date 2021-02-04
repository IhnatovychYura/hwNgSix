import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'hwNgSix';
  user = {name: 'Vasya', age: 18};

  name = new FormControl('Vasya', [Validators.required, Validators.minLength(10), this.customFuckValidator]);
  age = new FormControl(123);

  myForm = new FormGroup({
    name: this.name,
    age: this.age
  });

  onInputAction(): void {
    console.log(this.title);
  }

  // submit(form: HTMLFormElement): void {
  //   console.log(form);
  // }
  submit(form: NgForm): void {
    console.log(form);
  }

  xxx(myForm: FormGroup): void {
    console.log(myForm);
  }

  customFuckValidator(inputData: AbstractControl): any {
    if (inputData.value === 'fuck') {
      console.log(inputData);
      return {error: true, msg: 'forbidden word "FUCK" is in field name'};
    } else {
      return null;
    }
  }
}


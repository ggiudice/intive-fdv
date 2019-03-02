import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder   } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.userForm = this.createForm();
  }

  // TODO: Poner validadores
  private createForm(): FormGroup {
    const userForm = this.fb.group({
      name: [null],
      surname: [null],
      country: [null],
      birthdate: [null]
    });

    return userForm;
  }
}

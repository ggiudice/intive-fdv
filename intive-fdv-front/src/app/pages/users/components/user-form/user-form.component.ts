import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder   } from '@angular/forms';

import { Country, User } from '../../../../models';
import { CountryService } from '../../../../services';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  //TODO: MEJORAR ESTO
  config: ConfigUserForm = {
    maxDate: new Date(),
    countries: []
  };

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.userForm = this.createForm();
    this.getCountries();
    //this.config.countries = this.getCountries();
  }

  private save(): void {

    if (this.userForm.valid === false) {
      this.submitted = true;
      return;
    }

    const user = this.converterFormUserToUser();
    this.usersService.saveUser(user);
  }

  // TODO: Poner validadores
  private createForm(): FormGroup {
    const userForm = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(50)]],
      surname: [null, [Validators.required, Validators.maxLength(50)]],
      country: [null, [Validators.required]],
      birthdate: [null, [Validators.required]]
    });

    return userForm;
  }

  // TODO: Cach error y mostrar mensaje
  private getCountries(): void {

    this.countryService.getCountries().subscribe((countries: Country[]) => {
      this.config.countries = countries;
    });

  }

  private converterFormUserToUser(): User {
    const country =
      this.config.countries.find(countrySelected => countrySelected.alpha2Code === this.userForm.value.country);

    const user = new User();
    user.name = this.userForm.value.name;
    user.surname = this.userForm.value.surname;
    user.country = country;
    user.birthdate = this.userForm.value.birthdate;

    return user;
  }
}

class ConfigUserForm {
  maxDate: Date;
  countries: Country[];
}

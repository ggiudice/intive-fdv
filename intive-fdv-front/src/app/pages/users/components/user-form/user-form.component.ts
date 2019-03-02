import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder   } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Country, User } from '../../../../models';
import { CountryService } from '../../../../services';
import { UsersService } from '../../services/users.service';
import { isNumber } from 'util';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  idParams: number;
  //TODO: MEJORAR ESTO
  config: ConfigUserForm = {
    maxDate: new Date(),
    countries: []
  };

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private countryService: CountryService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.idParams = +this.route.snapshot.paramMap.get('id');
    this.userForm = this.createForm(this.idParams);
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
  private createForm(id: number): FormGroup {

    let user = new User();
    if (id !== 0 && isNaN(id) === false) {
      // TODO: reever esto no me gusta mucho.
      // Esto sucede si esta vacia la lista y se busca uno que no encuentra
      this.usersService.getUser(id).subscribe((userFound: User) => {
        user = userFound ? userFound : new User();
      });
    }

    const userForm = this.fb.group({
      name: [user.name, [Validators.required, Validators.maxLength(50)]],
      surname: [user.surname, [Validators.required, Validators.maxLength(50)]],
      country: [user.country && user.country.alpha2Code, [Validators.required]],
      birthdate: [new Date(user.birthdate), [Validators.required]]
    });

    return userForm;
  }

  private clearFormUser() {
    this.userForm.reset();
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
    user.id = this.idParams !== 0 ? this.idParams : null;
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

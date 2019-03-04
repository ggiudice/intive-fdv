import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder   } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { Country, User } from '../../../../models';
import { CountryService } from '../../../../services';
import { UsersService } from '../../services/users.service';
import { isNumber } from 'util';
import { LocaleService } from '../../../../services/locale.service';
import { LocaleConstants } from '../../../../shared/constants';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  LOCALE = LocaleConstants;
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
    private router: Router,
    private countryService: CountryService,
    private usersService: UsersService,
    private localeService: LocaleService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.idParams = +paramMap.get('id');
      this.userForm = this.createForm(this.idParams);
    });
    this.getCountries();
  }

  save(): void {

    if (this.userForm.valid === false) {
      this.submitted = true;
      return;
    }

    const user = this.converterFormUserToUser();
    this.usersService.saveUser(user);
    this.clearFormUser();
  }

  clearFormUser() {
    this.idParams = null;
    this.submitted = false;
    this.router.navigate(['/users']);
    this.userForm.reset();
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
      birthdate: [user.birthdate ? new Date(user.birthdate) : null, [Validators.required]]
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

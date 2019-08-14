import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { LocaleService } from '@cdc/shared/services';
import { LocaleConstants } from '@cdc/shared/constants';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  LOCALE = LocaleConstants;
  localeService: LocaleService;
  constructor(
    private location: Location,
    localeService: LocaleService
  ) {
    this.localeService = localeService;
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}

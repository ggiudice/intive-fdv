import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss']
})
export class FilterTableComponent implements OnInit {

  @Output() getDataPutting = new EventEmitter<any>();
  
  @Input() type: string = "text";
  @Input() typeSubmit: string = "submit";
  @Input() typeAttribute: string;
  @Input() placeholder: string;
  @Input() filterName: string; 
  
  //TODO solo para hacer ejemplo desde producto se cambio a id name
  @Input() listItems: any[]; // code y title -- Ver de hacer un objet y dar error si no viene asi.

  form: FormGroup
  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.checkInputComponent();

    this.form = this.fb.group({
      input: [null, [Validators.maxLength(50)]]
    });
  }


  submitTypeChange() {
    
    //if(isNullOrUndefined(this.form.get('input').value)) {
    if(this.form.invalid  || this.typeSubmit !== 'change') {
      return;
    }

    const filter = new Filter(this.filterName, this.getTypeAttribute(this.form.get('input').value))
    this.getDataPutting.emit(filter);
  }

  submitTypeDateChange($event) {
    if(isNullOrUndefined($event)) {
      return;
    }

    const filter = new Filter(this.filterName, this.getTypeAttribute($event));
    this.getDataPutting.emit(filter);
  }

  //TODO ver de unifcar con el de change si es lo mismo
  submitTypeSubmit() {
    //if(isNullOrUndefined(this.form.get('input').value)) {
    if(this.form.invalid || this.typeSubmit !== 'submit') {
      return;
    }

   // if(this.typeSubmit === 'submit' && !isNullOrUndefined(this.form.get('input').value)) {
      const filter = new Filter(this.filterName, this.getTypeAttribute(this.form.get('input').value))
      this.getDataPutting.emit(filter);
   // }
  }


  private getTypeAttribute(value: any): any {
    let useType = this.typeAttribute ? this.typeAttribute : this.type;
    let valueTyped = null;

    switch(useType) {
      case 'number': { 
        valueTyped = Number(value);
        break;
      }
      case 'date': { 
        valueTyped = new Date(value);
        break;
      }
      case 'text': { 
        valueTyped = String(value);
        break;
      }
      default: { 
        valueTyped = String(value);
        break;
      }
    }

    return valueTyped;
  }

  private checkInputComponent(): void {
    
    if(this.typeSubmit) {
      const possibleTypeSubmit = ['submit', 'change']
      const typeSubmitFound =
        possibleTypeSubmit.find(posibleTypeSubmitItem => posibleTypeSubmitItem === this.typeSubmit);
 
      if(isNullOrUndefined(typeSubmitFound)) {
        throw new Error(`Attributte 'typeSubmit' one of these types is required: ${possibleTypeSubmit.join(', ')}`)
      }
    }
    if(this.type) {
      const possibleType = ['number', 'text', 'date', 'datePicker', 'list', 'amount']
      const typeFound = possibleType.find(posibleTypeItem => posibleTypeItem === this.type);
      
      if(isNullOrUndefined(typeFound)) {
        throw new Error(`Attributte 'type' one of these types is required: ${possibleType.join(', ')}`)
      }
    }

    if(isNullOrUndefined(this.filterName)) {
      throw new Error("Attributte 'filterName' is required'")
    }

    if(this.type === 'list' && isNullOrUndefined(this.listItems)) {
      throw new Error("If type is 'list' you should defined 'listItems'")
    }

  }
}

class Filter {
  name: string;
  value: any;

  constructor(name: string, value: any) {
    this.name = name;
    this.value = value;
  }
}

import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Topping, Pizza } from './../../../models/field-config.model';


export interface State {
  pizzas: Pizza[];
  toppings: Topping[];
}
const state: State = {
  pizzas: [
    { name: 'New Yorker', toppings: ['Bacon', 'Pepperoni', 'Ham', 'Mushrooms'] },
    { name: 'Hot & Spicy', toppings: ['Jalapenos', 'Herbs', 'Pepperoni', 'Chicken'] },
    { name: 'Hawaiian', toppings: ['Ham', 'Pineapple', 'Sweetcorn'] }
  ],
  toppings: [
    'Bacon', 'Pepperoni', 'Mushrooms', 'Herbs',
    'Chicken', 'Pineapple', 'Ham', 'Jalapenos'
  ]
};
@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss']
})

export class CheckboxInputComponent {


  touched = false;

  @Input()
  parent: FormGroup;

  @Input()
  selected: Topping[];

  @Input()
  toppings: Topping[];

  @Output()
  select = new EventEmitter<Topping>();

  get invalid() {
    return (
      this.parent.hasError('noToppings') &&
      this.touched
    );
  }

  exists(topping: Topping) {
    // tslint:disable-next-line:no-bitwise
    return !!~this.selected.indexOf(topping);
  }

  isActive(topping: Topping) {
    return this.exists(topping);
  }

  onSelect(topping: Topping) {
    this.touched = true;
    this.select.emit(topping);
  }





}

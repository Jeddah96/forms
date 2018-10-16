import { Component, OnInit } from '@angular/core';
// import { ContainerWizardService } from './../../services/container-wizard.service';
import { Pizza, Topping } from './../../models/field-config.model';

@Component({
  selector: 'app-story-creator',
  templateUrl: './story-creator.component.html',
  styleUrls: ['./story-creator.component.scss']
})
export class StoryCreatorComponent {

  // pizzas$ = this.pizzaService.select<Pizza[]>('pizzas');
  // toppings$ = this.pizzaService.select<Topping[]>('toppings');

  // constructor(
  //   private pizzaService: ContainerWizardService
  // ) {}

  // addPizza(event: any) {
  //   this.pizzaService.addPizza(event);
  // }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  minValue2 = 1000;
  maxValue2 = 2000;
  step2 = 500;
  currentValues = [0, 0];
  currentValues2 = [2000, 3500];

  onSliderChange(selectedValues: number[]) {
    this.currentValues = selectedValues;
  }
}

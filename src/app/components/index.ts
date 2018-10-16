import { ClientProjectComponent } from './containers/client-project/client-project.component';
import { TextInputComponent } from './inputs/text-input/text-input.component';
import { SubmitButtonComponent } from './inputs/submit-button/submit-button.component';
import { CheckboxInputComponent } from './inputs/checkbox-input/checkbox-input.component';
import { RadioInputComponent } from './inputs/radio-input/radio-input.component';

export const components: any[] = [
  ClientProjectComponent,
  TextInputComponent,
  SubmitButtonComponent,
  CheckboxInputComponent,
  RadioInputComponent,
];

export * from './containers/client-project/client-project.component';
export * from './inputs/text-input/text-input.component';
export * from './inputs/submit-button/submit-button.component';
export * from './inputs/checkbox-input/checkbox-input.component';
export * from './inputs/radio-input/radio-input.component';

import { Component, Input } from '@angular/core';
import { ErrorMessage } from '../../providers/movies/model';

/**
 * Generated class for the ErrorCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'error-card',
  templateUrl: 'error-card.html'
})
export class ErrorCardComponent {
  @Input() item: ErrorMessage;
  text: string;

  constructor() {
    console.log('Hello ErrorCardComponent Component');
    // this.text = 'Hello World';
  }

  ngOnInit(){
    this.text = this.item.message;
  }

}

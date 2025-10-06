import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting,Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  message=signal("Hello from Home to Greetings!");
  inputValue: number =0;

  handleChange(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  const parsed = parseInt(value, 10);
  this.inputValue = isNaN(parsed) ? 0 : parsed;
}
}

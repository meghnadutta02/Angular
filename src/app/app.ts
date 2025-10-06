import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Home } from './home/home';
import { Header } from './components/header/header';

// ng g component header   or ng g c header
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header],
  template: `
    <app-header/>
    <main>
      <router-outlet/> 
    </main>

     
    
  `,
  styles: [`main{
      padding:16px
    }`],
})
export class App {
  protected readonly title = signal('second-ng-app');
}

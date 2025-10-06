import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  // providers:[TodosService] // to use services in a single component
})
export class Header {
  title=signal("My app")
}

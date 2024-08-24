import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "Pokedex";
  name: string = "Pikachu";
  life: number = 21;
  protected readonly onclick = onclick;

  increment() {
    this.life++;
  }

  decrement() {
    this.life--;
  }


}

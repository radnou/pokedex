import {Component, computed, effect, signal} from '@angular/core';
import {DecimalPipe, TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DecimalPipe,
    TitleCasePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  compteur = signal(5);

  title: string = "Pokedex";
  name: string = "Pikachu";
  wins = signal(21);
  experience = computed(() => this.wins() * 0.23);

  constructor() {
    effect(() => {
      console.log("L'experience a été mis à jour : " + Date.now());
    });
  }

  increment() {
    this.wins.update(n => n + 1);
  }

  decrement() {
    this.wins.update(n => n - 1);
  }

  reset() {
    this.wins.set(0);
  }

  updateSignal() {

// Accès à la valeur du signal
    console.log(this.compteur()); // 0

// Modification de la valeur du signal
    //this.compteur.set(1);
    // console.log(this.compteur()); // 1

// Mise à jour de la valeur du signal
    this.compteur.update(n => n + 1);
    console.log(this.compteur()); // 2
  }

}

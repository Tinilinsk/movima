import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Registration } from './registration/registration';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, Registration],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}

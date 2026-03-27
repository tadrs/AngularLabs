import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from "./components/home/home";
import { Student } from './models/student';
import { Card } from './components/card/card';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Home, Card, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab1');
}

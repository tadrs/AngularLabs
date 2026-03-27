import { Component, Input } from '@angular/core';
import { Student } from '../../models/student'

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() studentData!: Student;
}

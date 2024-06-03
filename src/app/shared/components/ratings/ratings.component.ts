import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss',
})
export class RatingsComponent {
  private maxRating = 5;
  rating = 3;
  arrRating: number[] = [];

  private calculateRating() {
    for (let i = 0; i < this.maxRating; i++) {
      if (i <= this.rating - 1) {
        this.arrRating.push(1);
        continue;
      }
      this.arrRating.push(0);
    }
  }

  ngOnInit(): void {
    this.calculateRating();
    console.log(this.arrRating);
  }
}

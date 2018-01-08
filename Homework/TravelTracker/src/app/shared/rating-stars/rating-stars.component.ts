import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';


/* Credit to this blog (with minor modification according to the Travel-Tracker App needs) : */
/* http://www.angulartutorial.net/2017/10/rating-star-component-using-angular.html */

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.css']
})
export class RatingStarsComponent implements OnInit {
  @Input() max = 5;
  @Input() readOnly = true;
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<Number> = new EventEmitter<Number>();
  maxStars: any[];

  ngOnInit() {
      this.maxStars = [];
      for (let i = 0; i < this.max; i++) {
          this.maxStars.push(i + 1);
      }
  }

  toggleRating(starIndex: number) {
    if (!this.readOnly) {
        this.rating = starIndex;
        this.ratingClicked.emit(this.rating);
    }
  }
}
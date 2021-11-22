import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  images: {path: string}[];

  constructor() {
    this.images = [
      {path: '../../../../../assets/bad-boys.jpg'},
      {path: '../../../../../assets/maxresdefault%20(1).jpg'},
      {path: '../../../../../assets/bad-boys.jpg'},
    ];
  }

  ngOnInit(): void {
  }

}

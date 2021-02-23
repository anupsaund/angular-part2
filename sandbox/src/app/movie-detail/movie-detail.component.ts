import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {
  movie_detail_id: string = 'nothing';
  movie_detail: any;

  constructor(private route:ActivatedRoute) { 

    this.route.params.subscribe( // subscription
      params => {
        this.movie_detail_id = params['anup'];
        this.getMovieDetailFromAPICall(this.movie_detail_id);
      }
    );
  }

  getMovieDetailFromAPICall(imdbID:string){
    // API CALL
    // 
    // Include the movie API service
    // Make an instance of it in the constructor
    // In this section here, make an API call to get the movie detail
    // hint ?t=tt123213
    // put the response into this.movie_detail

    // In the HTML do something like {{move_detail |json}}


  }

  ngOnInit(): void {
  }

}

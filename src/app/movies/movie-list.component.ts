import { Component } from "@angular/core";

@Component({
selector:"app-movie-list",
template:`
<div>
  <h3>All Movies</h3>
  <hr />
  <div class="row">
    <div class="col-md-2">
      <app-movie-thumnail></app-movie-thumnail>
    </div>
  </div>
</div>

`,
styleUrls:["./movie-list.component.css"]
})
export class MovieListComponent{
    
}
import { Component } from "@angular/core";

@Component({
  selector: "app-movie-thumnail",
  template: `
    <div class="image">
      <img src="assets/img/homd/hom2d.jpg" alt="Movie image" />
      <div class="contain">
        <div class="details">
          <h4>title</h4>
          <p>date</p>
        </div>
        <div class="rate">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text">1 star</label>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./movie-list.component.css"]
})
export class MovieThumbnailComponent {}

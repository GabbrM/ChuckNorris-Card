import { Component } from '@angular/core';
import {JokeService} from "../../services/joke.service";
import {Joke} from "../../models/joke";

@Component({
  selector: 'app-jokes-card',
  templateUrl: './jokes-card.component.html',
  styleUrls: ['./jokes-card.component.css']

})
export class JokesCardComponent {

  categories: string[] = [];
  jokes: Joke[] = [];
  constructor(private jokeService: JokeService) {}

  jokeCategories: { [key: string]: string } = {};

  ngOnInit(): void {
    this.jokeService.getCategories().subscribe(categories => {
      this.categories = categories;
      this.categories.forEach(category => {
        this.jokeService.getRandomJokeByCategory(category).subscribe(joke => {
          this.jokes.push(joke);
          this.jokeCategories[joke.id] = category;
        });
      });
    });
  }

}

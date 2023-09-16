import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Joke} from "../models/joke";

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private base_URL = 'https://api.chucknorris.io/jokes'

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.base_URL}/categories`);
  }
  constructor(private http: HttpClient) { }

  getRandomJokeByCategory(category: string): Observable<any> {
    return this.http.get<Joke>(`${this.base_URL}/random?category=${category}`);
  }
}

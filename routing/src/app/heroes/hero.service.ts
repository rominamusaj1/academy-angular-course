import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

  getHero(id: number | string) {
    return  HEROES.find(hero => hero.id === +id);
  }
}


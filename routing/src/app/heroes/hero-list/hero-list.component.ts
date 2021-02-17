import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit, OnDestroy {
  heroes: Hero[];
  selectedId: number;
  private subscription: Subscription;

  constructor(private service: HeroService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.queryParamMap
      .subscribe((params) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        this.heroes = this.service.getHeroes();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

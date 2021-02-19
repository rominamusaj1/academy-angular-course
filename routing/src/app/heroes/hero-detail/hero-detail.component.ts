import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  hero: Hero;
  private subscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService 
  ) {
    
  }

  ngOnInit() {
    this.subscription = this.route.paramMap
    .subscribe(
      (params: ParamMap) =>
        (this.hero = this.service.getHero(params.get('id')))
    );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  gotoHeroes() {
    const heroId = this.hero ? this.hero.id : null;
    this.router.navigate(['/superheroes'], {queryParams: { id: heroId}});
  }
}

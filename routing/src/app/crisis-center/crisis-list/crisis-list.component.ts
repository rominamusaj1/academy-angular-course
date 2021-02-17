import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css'],
})
export class CrisisListComponent implements OnInit, OnDestroy {
  crises: Crisis[];
  selectedId: number;
  private subscription: Subscription;

  constructor(private service: CrisisService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe((params) => {
      this.selectedId = +params.get('id');
    });
    this.crises = this.service.getCrises();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

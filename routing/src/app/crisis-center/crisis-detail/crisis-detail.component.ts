import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Crisis } from '../crisis';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
})
export class CrisisDetailComponent implements OnInit, OnDestroy {
  crisis: Crisis;
  editName: string;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.subscription = this.route.data.subscribe(
      (data: { crisis: Crisis }) => {
        this.editName = data.crisis.name;
        this.crisis = data.crisis;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    const confirmation = window.confirm('Discard changes?');
    return confirmation;
  }

  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], {
      relativeTo: this.route,
    });
  }
}

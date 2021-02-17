import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  static nextCrisisId = 100;
  private crises: Array<Crisis> = CRISES;

  constructor() {}

  getCrises(): Array<Crisis> {
    return this.crises;
  }

  getCrisis(id: number | string): Observable<Crisis> {
    return of(this.crises.find((crisis) => crisis.id === +id));
  }

  addCrisis(name: string): void {
    name = name.trim();
    if (name) {
      const crisis = { id: CrisisService.nextCrisisId++, name };
      CRISES.push(crisis);
    }
  }
}

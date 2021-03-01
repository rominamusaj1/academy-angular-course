import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  count: number = 0;

  static total: number = 0;

  constructor() {
    ++CountService.total;
  }

  increment(): void {
    ++this.count;
  }
}

import { Component, OnInit } from '@angular/core';
import { COURSES } from './courses';

@Component({
  selector: 'app-text-interpolation-examples',
  template: ` <div>
    <h1>Text interpolation examples</h1>
    <hr />
    <div>
      <h2>{{ title }}</h2>
      <div><img src="{{  logoUrl }}" /></div>
      <hr />
      <h2>Current Course from the list of courses</h2>
      <p>{{ currentCourse }}</p>
      <hr />
      <h2>Evaluating template expressions</h2>
      <h3>Simple evaluation (to a string):</h3>
      <!-- "The sum of 1 + 1 is 2" -->
      <p>The sum of 1 + 1 is {{ 1 + 1 }}.</p>
      <h3>Evaluates using a method (also evaluates to a string):</h3>
      <!-- "The sum of 1 + 1 is not 4" -->
      <p>The sum of 1 + 1 is not {{ 1 + 1 + getVal() }}.</p>
    </div>
    <hr />
    <h2>Expression Context</h2>
    <div>
      <h4>Template context, template input variables (let customer):</h4>
      <ul>
        <li *ngFor="let course of courses">{{ course.name }}</li>
      </ul>
    </div>
  </div>`,
})
export class TextInterpolationExamplesComponent implements OnInit {
  courses = COURSES;
  currentCourse = 'Angular';
  title = 'IkubINFO Academy logo:';
  logoUrl = '../assets/logo.jpg';
  recommended = 'You might also like:';
  getVal(): number {
    return 2;
  }
  constructor() {}
  ngOnInit() {}
}

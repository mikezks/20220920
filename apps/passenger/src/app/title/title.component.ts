import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'flight-workspace-passenger-title',
  template: `
    <h2 class="title">{{ title }}</h2>
  `
})
export class TitleComponent {
  @Input() title = 'My Flights';
}

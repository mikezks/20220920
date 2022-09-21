import { Component, ComponentRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  standalone: true,
  selector: 'app-about',
  template: `
    <div class="card">

      <div class="header">
        <ng-container #container></ng-container>
      </div>
      <div class="content">
        Something about my fabulous Flight Search engine.
      </div>
    </div>
  `
})
export class AboutComponent implements OnInit {
  title = 'Standalone Demo';

  @ViewChild('container', {read: ViewContainerRef})
  viewContainer!: ViewContainerRef;

  async ngOnInit() {
    const esm = await loadRemoteModule<{ TitleComponent: Type<any> }>({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './title-component'
    });
    const titleComponent = this.viewContainer.createComponent(esm.TitleComponent)
    titleComponent.instance['title'] = 'Dynamic Flight Title';

    /**
     * Ab Angular 14.1 gibt es die setInput Methode:
     */
    // titleComponent.setInput('title', 'Dynamic Flight Title')
  }
}

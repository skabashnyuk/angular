import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabsetConfig, TabsModule } from 'ngx-bootstrap/tabs';

import { NavigationModule } from 'patternfly-ng';
import { VerticalNavigationExampleComponent } from './vertical-navigation-example.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    NavigationModule,
    TabsModule.forRoot()
  ],
  declarations: [VerticalNavigationExampleComponent],
  exports: [VerticalNavigationExampleComponent],
  providers: [TabsetConfig],
  bootstrap: [VerticalNavigationExampleComponent]
})
export class NavigationExampleModule {
  constructor() {}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingpageRoutingModule } from './landingpage-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';

@NgModule({
  declarations: [
    LandingpageComponent,
    // FooterComponent
  ],
  imports: [
    CommonModule,
    LandingpageRoutingModule,
    SharedModulesModule
  ]
})
export class LandingpageModule { }

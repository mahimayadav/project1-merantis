import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { LandingRoutingModule } from './landing-routing.module';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../tabs/components/navbar/navbar.component';
import { FooterComponent } from '../tabs/components/footer/footer.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@NgModule({
  declarations: [
    WelcomeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    CanvasJSAngularChartsModule
  ],
  providers: [],
  bootstrap: []
})
export class LandingModule { }

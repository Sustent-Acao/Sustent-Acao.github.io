import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarModule} from 'primeng/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { SomosComponent } from './somos/somos.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    SomosComponent

  ],
  imports: [
    CommonModule,
    ToolbarModule
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    SomosComponent
  ]
})
export class SharedModule { }

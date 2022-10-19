import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { SomosComponent } from './somos/somos.component';
import { TitleComponent } from './title/title.component';

import { FieldsetModule } from 'primeng/fieldset';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuItem, PrimeIcons } from 'primeng/api';

@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    SomosComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    FieldsetModule,
    SidebarModule,
    ButtonModule,
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    SomosComponent,
    TitleComponent
  ]
})
export class SharedModule { }
